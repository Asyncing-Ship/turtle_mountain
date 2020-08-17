import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Alert, AlertIcon, Tag, TagIcon, TagLabel, Stack, CloseButton, IconButton } from '@chakra-ui/core';

class Alerts extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_NOTIFICATIONS', payload: this.props.user.id });
  }

  render() {
    return (
      <>
        <Stack my={5} w="50%">
          {this.props.notis.map((x, i) =>
            <Alert rounded="full" key={i} status="info" variant="subtle">
              <AlertIcon />
              {x.type} from
              {
                x.is_admin ?
                  <Tag
                    rounded="full"
                    size="sm"
                    variantColor="purple"
                    mx={2}
                  >
                    <TagIcon icon="star" size="10px" />
                    <TagLabel>{x.first_name} {x.last_name}</TagLabel>
                  </Tag>
                  :
                  <Tag
                    rounded="full"
                    size="sm"
                    variantColor="yellow"
                    mx={2}
                  >
                    <TagLabel>{x.first_name} {x.last_name}</TagLabel>
                  </Tag>
              }
              : {x.preview}
              <IconButton
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