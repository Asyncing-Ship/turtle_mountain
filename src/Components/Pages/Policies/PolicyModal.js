import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Button,
  AspectRatioBox,
  Box,
  IconButton,
  Flex,
} from '@chakra-ui/core';
import { connect } from 'react-redux';

const PolicyModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        mr={2}
        rightIcon="view"
        size="sm"
        variantColor="blue"
        onClick={() => onOpen()}
      >
        View
      </Button>

      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent mb={0}>
          <ModalHeader p={3}>
            <Flex>
              {props.x.filename}
              <Box flex={1} textAlign="right">
                <IconButton
                  variantColor="red"
                  variant="ghost"
                  icon="close"
                  onClick={onClose}
                />
              </Box>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <AspectRatioBox
              p={3}
              rounded="lg"
              border="1px solid #2f2e2e"
              maxW="60%"
              mx="auto"
            >
              <Box
                as="embed"
                title={props.x.filename}
                src={`https://cdn.filestackcontent.com/${props.x.handle}`}
              />
            </AspectRatioBox>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

const mapStateToProps = state => {
  return {
    policies: state.policies,
  }
}

export default connect(mapStateToProps)(PolicyModal);