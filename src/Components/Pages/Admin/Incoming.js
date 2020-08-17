import React from "react";

import {
  Box,
  Button,
  ButtonGroup,
  Tag,
  TagLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from "@chakra-ui/core";
import { connect } from "react-redux";
const Incoming = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      textAlign="right"
      rounded="lg"
      borderWidth="1px"
      p={2}
    >
      <Box
        as="span"
        textAlign="left"
        verticalAlign="middle"
        ml={3}
      >
        <Tag
          rounded="full"
          size="sm"
          variantColor="gray"
          mr={2}
        >
          <TagLabel>{props.user.first_name} {props.user.last_name}</TagLabel>
        </Tag>
      </Box>
      <ButtonGroup ml={3}>
        <Button
          size="sm"
          variantColor="green"
          rightIcon="check"
          onClick={onOpen}
        >
          Approve
        </Button>
        <Button
          size="sm"
          variantColor="red"
          rightIcon="close"
          onClick={() => {
            props.dispatch({
              type: "DELETE_USER",
              payload: props.user.id,
            });
          }}
        >
          Reject
        </Button>
      </ButtonGroup>

      {/* Approve User Modal //////////////////////////////////////////////////////////////////////////////////////// */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded="lg">
          <ModalHeader>New User Detected</ModalHeader>
          <ModalBody>
            <p>
              You are about to grant{" "}
              <Tag
                rounded="full"
                size="sm"
                variantColor="gray"
                mr={2}
              >
                <TagLabel>{props.user.first_name} {props.user.last_name}</TagLabel>
              </Tag>
                regular access as a member.
              </p>
          </ModalBody>

          <ModalFooter>
            <Button size="sm" mr={3} onClick={onClose}>
              Cancel
              </Button>
            <Button
              size="sm"
              variant="ghost"
              variantColor="green"
              onClick={() => {
                onClose();
                props.dispatch({
                  type: "APPROVE_USER",
                  payload: props.user.id,
                });
              }}
            >
              Approve New Member
              </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default connect()(Incoming);
