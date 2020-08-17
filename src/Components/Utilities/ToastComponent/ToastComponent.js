import React from "react";
import { connect } from "react-redux";
import { useToast } from "@chakra-ui/core";
const ToastComponent = (props) => {
  const toast = useToast();
  return (
    <div>
      {props.toast.status &&
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
const mapStateToProps = (state) => {
  return {
    toast: state.toast,
  };
};

export default connect(mapStateToProps)(ToastComponent);
