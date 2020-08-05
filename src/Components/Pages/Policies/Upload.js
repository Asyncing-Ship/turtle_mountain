import React from "react";
import { Button, useToast } from "@chakra-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as filestack from 'filestack-js';

const client = filestack.init(`ArFFVyUFxQ2uJuTYkcLIVz`);

const Upload = (props) => {
  // const toast = useToast();
  // const options = {
  //   onUploadFinished: () => {
  //     toast({
  //       title: "Uploaded!",
  //       description: "You successfully uploaded a file.",
  //       status: "info",
  //       duration: 5000,
  //       isClosable: true,
  //       position: "bottom-right",
  //     });
  //   },
  //   onUploadDone: () => {
  //     toast({
  //       title: "Done!",
  //       description: "All files have finished uploading.",
  //       status: "success",
  //       duration: 5000,
  //       isClosable: true,
  //       position: "bottom-right",
  //     });
  //   },
  //   minFiles: 1,
  //   maxFiles: 3,
  //   maxSize: 1 * 1024 * 1024, // 1 MB file size limit
  // }

  return (
    <>
      This is the policy page!
      <Button onClick={async () => {
        await client
          .picker()
          .open()
      }}>Upload Policy</Button>
    </>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(Upload));
