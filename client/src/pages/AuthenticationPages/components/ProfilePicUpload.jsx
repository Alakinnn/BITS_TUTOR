import { Input, Logo, Container } from "@react-login-page/page8";
import React from "react";
import ImageUpload from "./ImageUpload";
import defaultImage from "/public/images/profile.jpg";

function ProfilePicUpload({ index }) {
  return (
    <ImageUpload
      index={index}
      fieldName="profilePic"
      buttonText="Upload Your Photo"
      cssClass="profilePicture"
      defaultImageUrl={defaultImage}
    />
  );
}

export default ProfilePicUpload;
