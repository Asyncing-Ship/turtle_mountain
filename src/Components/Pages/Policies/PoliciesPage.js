import React, { Component } from 'react';
import Upload from './Upload';
import { connect } from 'react-redux';
import { SimpleGrid, Box, Stack, Text, Button, ButtonGroup } from '@chakra-ui/core';
import PolicyModal from './PolicyModal';

class PoliciesPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_POLICIES' });
  }

  render() {
    const { policies } = this.props;
    return (
      <>
        <Stack>
          <Box p={5}>
            <Upload />
          </Box>
          <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }}>
            {
              policies.map((x, i) =>
                <Box
                  color="#f5fffa"
                  rounded="lg"
                  p={3}
                  m={3}
                  bg="#2f2e2e"
                  key={i}>
                  <Stack>
                    <Text>{x.filename}</Text>
                    <ButtonGroup>
                      {/* <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://cdn.filestackcontent.com/${x.handle}`}
                      >
                        <Button rightIcon="view" size="sm" variantColor="blue">View</Button>
                      </Link> */}
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
    policies: state.policies,
  }
}

export default connect(mapStateToProps)(PoliciesPage);