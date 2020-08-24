import React from "react";
import {
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Tag,
  TagIcon,
  TagLabel,
} from "@chakra-ui/core";
import { connect } from "react-redux";

const Approved = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpenAlert, setIsOpen] = React.useState();
  const onCloseAlert = () => setIsOpen(false);
  const cancelRef = React.useRef();

  return (
    <>
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
          {
            props.user.is_admin ?
              <Tag
                rounded="full"
                size="sm"
                variantColor="purple"
                mr={2}
              >
                <TagIcon icon="star" size="10px" />
                <TagLabel>{props.user.first_name} {props.user.last_name}</TagLabel>
              </Tag>
              :
              <Tag
                rounded="full"
                size="sm"
                variantColor="yellow"
                mr={2}
              >
                <TagLabel>{props.user.first_name} {props.user.last_name}</TagLabel>
              </Tag>
          }
        </Box>
        <Box as="span" verticalAlign="middle" ml={3}>
          {!props.user.is_admin ? (
            <Button
              size="sm"
              variantColor="purple"
              rightIcon="star"
              onClick={onOpen}
            >
              Promote
            </Button>
          ) : (
              <Button
                size="sm"
                variantColor="yellow"
                rightIcon="minus"
              >
                Demote
              </Button>
            )
          }
        </Box>
        <Box
          as="span"
          verticalAlign="middle"
          ml={3}
          alignItems="right"
          justifyContent="right"
          textAlign="right"
        >
          <Button
            size="sm"
            variantColor="red"
            rightIcon="close"
            onClick={() => setIsOpen(true)}
          // onClick={() => }
          >
            Remove
          </Button>
        </Box>

        {/* Delete User Alert /////////////////////////////////////////////////////////////////////////////////////////////*/}

        <>
          <AlertDialog
            isOpen={isOpenAlert}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay />
            <AlertDialogContent rounded="lg">
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Member
              </AlertDialogHeader>

              <AlertDialogBody>
                You are about to remove member{" "}
                {
                  props.user.is_admin ?
                    <Tag
                      rounded="full"
                      size="sm"
                      variantColor="purple"
                      mr={2}
                    >
                      <TagIcon icon="star" size="10px" />
                      <TagLabel>{props.user.first_name} {props.user.last_name}</TagLabel>
                    </Tag>
                    :
                    <Tag
                      rounded="full"
                      size="sm"
                      variantColor="yellow"
                      mr={2}
                    >
                      <TagLabel>{props.user.first_name} {props.user.last_name}</TagLabel>
                    </Tag>
                }
                from Turtle Mountain Connect. This cannot be undone.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button
                  size="sm"
                  ref={cancelRef}
                  onClick={onCloseAlert}
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  variantColor="red"
                  onClick={() => {
                    onCloseAlert();
                    props.dispatch({
                      type: "DELETE_USER",
                      payload: props.user.id,
                    });
                  }}
                  ml={3}
                >
                  Delete Member
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>

        {/* Promote User Modal ////////////////////////////////////////////////////////////////////////////////////////////*/}

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent rounded="lg">
            <ModalHeader>Modify Role</ModalHeader>
            <ModalBody>
              <p>
                You are about to grant member{" "}
                <Tag
                  rounded="full"
                  size="sm"
                  variantColor="yellow"
                  mr={2}
                >
                  <TagLabel>{props.user.first_name} {props.user.last_name}</TagLabel>
                </Tag>
                all admin privileges.
              </p>
            </ModalBody>

            <ModalFooter>
              <Button size="sm" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                size="sm"
                variant="ghost"
                variantColor="purple"
                onClick={() => {
                  onClose();
                  props.dispatch({
                    type: "PROMOTE_USER",
                    payload: props.user.id,
                  });
                }}
              >
                Promote to Admin
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default connect()(Approved);
