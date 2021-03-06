import React, { Component } from 'react';
import Upload from './Upload';
import { connect } from 'react-redux';
import { SimpleGrid, Box, Stack, Text, Button, ButtonGroup, IconButton } from '@chakra-ui/core';
import PolicyModal from './PolicyModal';

class PoliciesPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_POLICIES' });
  }

  render() {
    const { user, policies } = this.props;
    return (
      <>
        <Stack>
          <h3>This page lists Turtle Mountain Animal Rescue's general policies</h3>
          <small>Click the "View" button to see a policy</small>
          <small>Admins can upload new policies or delete current ones</small>
          {
            user.is_admin ?
              <Box p={5}>
                <Upload />
              </Box>
              : ''
          }
          <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }}>
            {
              policies.map((x) =>
                <Box
                  color="#f5fffa"
                  rounded="lg"
                  p={3}
                  m={3}
                  bg="#2f2e2e"
                  key={x.id}>
                  <Stack>
                    <Text>{x.filename}</Text>
                    <ButtonGroup>
                      <PolicyModal x={x} />
                      <Button rightIcon="download" size="sm" variantColor="purple">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`https://cdn.filestackcontent.com/${x.handle}`}
                          download={x.filename}
                        >
                          Download
                        </a>
                      </Button>
                      {
                        user.is_admin ?
                          <IconButton
                            variantColor="red"
                            icon="delete"
                            size="sm"
                            onClick={() => {
                              this.props.dispatch({ type: 'DELETE_POLICY', payload: x.id });
                            }}
                          />
                          : ''
                      }
                    </ButtonGroup>
                  </Stack>
                </Box>
              )
            }
          </SimpleGrid>
        </Stack>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    policies: state.policies,
  }
}

export default connect(mapStateToProps)(PoliciesPage);