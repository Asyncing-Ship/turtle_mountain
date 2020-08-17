import React from "react";
import { connect } from "react-redux";
import { useToast } from "@chakra-ui/core";
// A Custom Wrapper Component -- This will keep our code DRY.
// Responsible for watching redux state, and returning an appropriate component
// API for this component is the same as a regular route

// THIS IS NOT SECURITY! That must be done on the server
// A malicious user could change the code and see any view
// so your server-side route must implement real security
// by checking req.isAuthenticated for authentication
// and by checking req.user for authorization
const ToastComponent = (props) => {
  const toast = useToast();
  return (
    <div>
      {props.toast.status !== "null" &&
        toast({
          title: props.toast.status,
          description: props.toast.message,
          status: props.toast.status,
          duration: 5000,
          isClosable: true,
        }) &&
        props.dispatch({ type: "DELETE_TOAST" }) &&
        console.log("fuuuuuck")}
    </div>
  );
};

// Instead of taking everything from state, we just want the user and loginMode
// to determine which page we should show the user
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user, loginMode }) => ({ user, loginMode });
const mapStateToProps = (state) => {
  return {
    toast: state.toast,
  };
};

export default connect(mapStateToProps)(ToastComponent);
