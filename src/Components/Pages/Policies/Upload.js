import React from "react";
import { Button, useToast } from "@chakra-ui/core";
import { connect } from "react-redux";
import * as filestack from "filestack-js";

const client = filestack.init(`${process.env.REACT_APP_FILESTACK_KEY}`);

const Upload = (props) => {
  const toast = useToast();

  const uploadFiles = async (data) => {
    await props.dispatch({
      type: "UPLOAD_POLICY",
      payload: { filename: data.filename, handle: data.handle },
    });
  };

  const options = {
    fromSources: ["local_file_system", "googledrive", "facebook"],
    onFileUploadFinished: (res) => {
      uploadFiles({
        filename: res.filename,
        handle: res.handle,
      }).then((res) => {
        toast({
          title: "Uploaded!",
          description: "You successfully uploaded a file.",
          status: "info",
          duration: 5000,
          isClosable: true,
          position: "bottom-right",
        });
      });
    },
    onUploadDone: () => {
      toast({
        title: "Done!",
        description: "All files have finished uploading.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
    },
    onFileUploadFailed: (res) => {
      toast({
        title: "Failed!",
        description: `${res.filename} failed to upload.`,
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
    },
    minFiles: 1,
    maxFiles: 5,
    maxSize: 1 * 1024 * 1024, // 1 MB file size limit
  };

  return (
    <>
      <Button
        onClick={async () => {
          await client.picker(options).open();
        }}
      >
        Upload Policy
      </Button>
    </>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Upload);
