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
} from "@chakra-ui/core";
import { connect } from "react-redux";

const Approved = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpenAlert, setIsOpen] = React.useState();
  const onCloseDelete = () => setIsOpen(false);
  const cancelRef = React.useRef();
  return (
    <Box>
      <Box as="span" verticalAlign="top" ml={3}>
        {props.user.first_name} {props.user.last_name}
      </Box>
      {!props.user.is_admin && (
        <Box as="span" verticalAlign="top" ml={3}>
          <Button
            onClick={() => setIsOpen(true)}
            // onClick={() => {
            //   props.dispatch({
            //     type: "PROMOTE_USER",
            //     payload: props.user.id,
            //   });
            // }}
          >
            <Icon name="edit" size="16px" />
          </Button>
        </Box>
      )}
      <Box as="span" verticalAlign="top" ml={3}>
        <Button
          onClick={onOpen}
          // onClick={() => {
          //   props.dispatch({
          //     type: "DELETE_USER",
          //     payload: props.user.id,
          //   });
          // }}
        >
          <Icon name="close" size="16px" />
        </Button>
      </Box>

      {/* Delete User Alert */}

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
              <Button ref={cancelRef} onClick={onCloseDelete}>
                Cancel
              </Button>
              <Button variantColor="red" onClick={onCloseDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>

      {/* Promote User Modal */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              perspiciatis iusto iste quam voluptatem consequuntur eos tempore
              cupiditate velit qui, libero atque. Nam, corrupti cupiditate
              fugiat eius consectetur error alias rem iste labore ipsa nesciunt
              ipsam dolores aspernatur corporis debitis voluptatibus accusantium
              delectus! Aspernatur enim, voluptas a tempora voluptatum deserunt.
            </p>
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default connect()(Approved);
