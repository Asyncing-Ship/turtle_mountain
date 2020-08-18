import React, { Component } from "react";
import { withRouter } from "react-router";
import { Box, Button, SimpleGrid, Text, Flex } from "@chakra-ui/core";
import { Icon } from "@chakra-ui/core";

class Home extends Component {
  render() {
    const { history } = this.props;
    return (
      <Box>
        {/* Start of Tasks Button */}
        <Flex justify="center" align="center">
          <Button
            m={30}
            height="160px"
            width="160px"
            rounded="50%"
            variant="solid"
            variantColor="tmarBlack"
            bg="tmarBlack.800"
            onClick={() => history.push("/tasks")}
          >
            <Flex
              justifyContent="center"
              alignContent="center"
              direction="column"
            >
              <Box mt={1}>
                <Icon name="warning" size="3.5rem" color="red.500" />
              </Box>
              <Box>
                <Text as="h4" color="white" textTransform="uppercase" mt={4}>
                  tasks
                </Text>
              </Box>
            </Flex>
          </Button>
        </Flex>
        {/* End of Tasks Button */}
        <SimpleGrid columns={[1, null, 3]}>
          {/* Start of Policies Button */}
          <Flex justify="center" align="center">
            <Button
              m={30}
              height="160px"
              width="160px"
              rounded="50%"
              variant="solid"
              variantColor="tmarBlack"
              bg="tmarBlack.800"
              onClick={() => history.push("/policies")}
            >
              <Flex
                justifyContent="center"
                alignContent="center"
                direction="column"
              >
                <Box mt={1}>
                  <Icon name="info" size="3.5rem" color="blue.200" />
                </Box>
                <Box>
                  <Text as="h4" color="white" textTransform="uppercase" mt={4}>
                    policies
                  </Text>
                </Box>
              </Flex>
            </Button>
          </Flex>
          {/* End of Policies Button */}
          {/* Start of Settings Button */}
          <Flex justify="center" align="center">
            <Button
              m={30}
              height="160px"
              width="160px"
              rounded="50%"
              variant="solid"
              variantColor="tmarBlack"
              bg="tmarBlack.800"
              onClick={() => history.push("/info")}
            >
              <Flex
                justifyContent="center"
                alignContent="center"
                direction="column"
              >
                <Box mt={1}>
                  <Icon name="settings" size="3.5rem" color="green.300" />
                </Box>
                <Box>
                  <Text as="h4" color="white" textTransform="uppercase" mt={4}>
                    Info
                  </Text>
                </Box>
              </Flex>
            </Button>
          </Flex>
          {/* End of Settings Button */}
          {/* Start of Questions Button */}
          <Flex justify="center" align="center">
            <Button
              m={30}
              height="160px"
              width="160px"
              rounded="50%"
              variant="solid"
              variantColor="tmarBlack"
              bg="tmarBlack.800"
              onClick={() => history.push("/questions")}
            >
              <Flex
                justifyContent="center"
                alignContent="center"
                direction="column"
              >
                <Box mt={1}>
                  <Icon name="question" size="3.5rem" color="yellow.300" />
                </Box>
                <Box>
                  <Text as="h4" color="white" textTransform="uppercase" mt={4}>
                    questions
                  </Text>
                </Box>
              </Flex>
            </Button>
          </Flex>
          {/* End of Questions Button */}
        </SimpleGrid>
        {/* Start of Alerts Button */}
        <Flex justify="center" align="center">
          <Button
            m={30}
            height="160px"
            width="160px"
            rounded="50%"
            variant="solid"
            variantColor="tmarBlack"
            bg="tmarBlack.800"
            onClick={() => history.push("/alerts")}
          >
            <Flex
              justifyContent="center"
              alignContent="center"
              direction="column"
            >
              <Box mt={1}>
                <Icon name="bell" size="3.5rem" color="orange.400" />
              </Box>
              <Box>
                <Text as="h4" color="white" textTransform="uppercase" mt={4}>
                  alerts
                </Text>
              </Box>
            </Flex>
          </Button>
        </Flex>
        {/* End of Alerts Button */}
      </Box>
    );
  }
}

export default withRouter(Home);
