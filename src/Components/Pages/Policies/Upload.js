import React from "react";
import { Button, useToast } from "@chakra-ui/core";
import { connect } from "react-redux";
import * as filestack from 'filestack-js';

const client = filestack.init(`${process.env.REACT_APP_FILESTACK_KEY}`);

const Upload = (props) => {
  const toast = useToast();

  const saveUserData = data => {
    return new Promise((resolve) => {
      console.log(data);
      resolve({
        success: true
      })
    });
  };

  const uploadFiles = async data => {
    await this.props.dispatch({
      type: 'UPLOAD_FILE',
      payload: { filename: data.filename, handle: data.handle }
    });
    
  }

  const options = {
    fromSources: ["local_file_system", "googledrive", "facebook"],
    onFileUploadFinished: res => {  
      saveUserData({
        filename: res.filename,
        fileHandle: res.handle
      }).then((res) => {
        toast({
          title: "Uploaded!",
          description: "You successfully uploaded a file.",
          status: "info",
          duration: 5000,
          isClosable: true,
          position: "bottom-right",
        });
      })
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
    minFiles: 1,
    maxFiles: 3,
    maxSize: 1 * 1024 * 1024, // 1 MB file size limit
  };

  return (
    <>
      <Button onClick={async () => {
        await client
          .picker(options)
          .open()
      }}>Upload Policy</Button>
    </>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Upload);
