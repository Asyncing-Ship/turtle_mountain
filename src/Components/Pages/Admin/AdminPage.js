import React, { Component } from "react";
import { Grid, Button } from "@chakra-ui/core";
import { connect } from "react-redux";
import Incoming from "./Incoming";
import Approved from "./Approved";

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
        <Button
          onClick={() => {
            this.setState({ sortBy: "incoming" });
          }}
        >
          User Requests
        </Button>
        <Button
          onClick={() => {
            this.setState({ sortBy: "approved" });
          }}
        >
          Approved Users
        </Button>
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
        {this.state.sortBy === "approved" && (
          <Grid templateColumns="repeat(1, 1fr)" gap={3}>
            {this.props.users
              .filter((x) => x.isApproved)
              .map((x) => (
                <Approved user={x} />
              ))}
          </Grid>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users || [
      {
        first_name: "Carrie",
        last_name: "Underwood",
        id: 2,
        isApproved: true,
        isAdmin: true,
      },
      { first_name: "James", last_name: "Charles", id: 3, isApproved: true },
      { first_name: "Felix", last_name: "Kjellburg", id: 4 },
    ],
  };
};
export default connect(mapStateToProps)(AdminPage);
