import React, { Component } from "react";
import { Grid } from "@chakra-ui/core";
import { connect } from "react-redux";
import Incoming from "./Incoming";

class AdminPage extends Component {
  state = {
    sortBy: "incoming",
  };
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_ALL_USERS" });
  }
  render() {
    return (
      <div>
        This is the admin page!
        {this.state.sortBy === "incoming" && (
          <Grid templateColumns="repeat(1, 1fr)" gap={3}>
            {this.props.users
              .filter((x) => !x.isApproved)
              .map((x) => (
                <Incoming user={x} />
              ))}
          </Grid>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.user.users || [
      { first_name: "James", last_name: "Charles", id: 3 },
      { first_name: "Felix", last_name: "Kjellburg", id: 4 },
    ],
  };
};
export default connect(mapStateToProps)(AdminPage);
