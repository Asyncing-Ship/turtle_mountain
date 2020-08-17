import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Alert,
  AlertIcon,
  Tag,
  TagIcon,
  TagLabel,
  Stack,
  IconButton,
  Text,
  Box,
  Flex,
} from '@chakra-ui/core';
import moment from 'moment';

class Alerts extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_NOTIFICATIONS', payload: this.props.user.id });
  }

  render() {
    return (
      <>
        <Stack my={5} w={["100%", "100%", "85%", "65%"]}>
          {this.props.notis.map((x, i) =>
            <Alert my={2} key={i} w="100%" rounded="full" status="info" variant="subtle">
              <AlertIcon />
              <Flex>
                {
                  x.is_admin ?
                    <Tag
                      rounded="full"
                      size="sm"
                      variantColor="purple"
                      mr={2}
                    >
                      <TagIcon icon="star" size="10px" />
                      <TagLabel>{x.first_name} {x.last_name}</TagLabel>
                    </Tag>
                    :
                    <Tag
                      rounded="full"
                      size="sm"
                      variantColor="yellow"
                      mr={2}
                    >
                      <TagLabel>{x.first_name} {x.last_name}</TagLabel>
                    </Tag>
                }
                at {moment(x.date_posted).format("MM/DD/YY LT")} —
                <Box>
                  <b>{x.preview}</b>
                </Box>
              </Flex>
              <IconButton
                flex={1}
                icon="close"
                rounded="full"
                position="absolute"
                right="4px"
                variant="ghost"
                variantColor="red"
              />
            </Alert>
          )}
        </Stack>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    notis: state.notis,
  }
}

export default connect(mapStateToProps)(Alerts);