import React from "react";
import {
  Box,
  Button,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Heading,
} from "@chakra-ui/core";
import { connect } from "react-redux";

const Approved = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpenAlert, setIsOpen] = React.useState();
  const onCloseAlert = () => setIsOpen(false);
  const cancelRef = React.useRef();

  return (
    <div>
      <Box borderWidth="1px" rounded="lg" backgroundColor="gray">
        <Box as="span" verticalAlign="top" ml={3}>
          {props.user.first_name} {props.user.last_name}
        </Box>
        {!props.user.is_admin && (
          <Box as="span" verticalAlign="top" ml={3}>
            <Button onClick={onOpen}>
              <Icon name="edit" size="16px" />
            </Button>
          </Box>
        )}
        <Box
          as="span"
          verticalAlign="top"
          ml={3}
          alignItems="right"
          justifyContent="right"
          textAlign="right"
        >
          <Button
            onClick={() => setIsOpen(true)}
            // onClick={() => }
          >
            <Icon name="close" size="16px" />
          </Button>
        </Box>

        {/* Delete User Alert ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

        <>
          <AlertDialog
            isOpen={isOpenAlert}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay />
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Member
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onCloseAlert}>
                  Cancel
                </Button>
                <Button
                  variantColor="red"
                  onClick={() =>
                    props.dispatch({
                      type: "DELETE_USER",
                      payload: props.user.id,
                    })
                  }
                  ml={3}
                >
                  Delete Member
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>

        {/* Promote User Modal /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modify Role</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>Grant Admin Privileges</p>
            </ModalBody>

            <ModalFooter>
              <Button variantColor="blue" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                variant="ghost"
                onClick={async () => {
                  props.dispatch({
                    type: "PROMOTE_USER",
                    payload: props.user.id,
                  });
                }}
              >
                Assign Admin
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </div>
  );
};

export default connect()(Approved);
