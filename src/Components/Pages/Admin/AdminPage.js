import React, { Component } from "react";
import { Grid, Stack, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/core";
import { connect } from "react-redux";
import Incoming from "./Incoming";
import Approved from "./Approved";
import ForeOhThree from "../403/403";

class AdminPage extends Component {
  state = {
    sortBy: "incoming",
  };
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_ALL_USERS" });
  }
  render() {
    return (
      <Stack>
        <h3>This page allows admins to onboard new volunteers.</h3>
        <small>Admins may also reject, remove, and promote users.</small>
        {this.props.user.is_admin ? (
          <>
            {/* <Heading as="h2">Members</Heading> */}
            <Tabs mt={5} isFitted variant="line">
              <TabList mb={3}>
                <Tab>User Requests</Tab>
                <Tab>Approved Users</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                    {this.props.users
                      .filter((x) => !x.is_approved)
                      .map((x) => (
                        <Incoming user={x} />
                      ))}
                  </Grid>
                </TabPanel>
                <TabPanel>
                  <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                    {this.props.users
                      .filter((x) => x.is_approved)
                      .map((x) => (
                        <Approved user={x} />
                      ))}
                  </Grid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </>
        ) : (
            <ForeOhThree />
          )}
      </Stack>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
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
