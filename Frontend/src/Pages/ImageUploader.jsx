// ImageUploader.jsx
import React from "react";
import { IKContext, IKUpload } from "imagekitio-react";

const ImageUploader = () => {
  const onUploadSuccess = (res) => {
    console.log("Upload Success:", res);
    alert("Upload Success: " + res.url);
  };

  const onUploadError = (err) => {
    console.error("Upload Error:", err);
    alert("Upload Failed: " + err.message);
  };

  return (

    <IKContext
      publicKey= {process.env.PUBLIC_KEY}
    //   process.env.PRIVATE_KEY
      urlEndpoint= {process.env.URLENDPOINT}
      authenticationEndpoint="http://www.yourserver.com/auth" // <-- your backend auth API
    >
      <label htmlFor="">Upload an Image</label>
      <IKUpload
        fileName="user-upload.jpg"
        useUniqueFileName={true}
        isPrivateFile={false}
        onSuccess={onUploadSuccess}
        onError={onUploadError}
      />
    </IKContext>
  );
};

export default ImageUploader;
