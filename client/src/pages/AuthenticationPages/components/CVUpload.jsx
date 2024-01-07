import React from "react";
import ImageUpload from "./ImageUpload";
import defaultImage from "/images/cv.png";

function CVUpload({ index }) {
  return (
    <ImageUpload
      index={index}
      fieldName="cv"
      buttonText="Upload Your CV"
      cssClass="cv"
      defaultImageUrl={defaultImage}
    />
  );
}

export default CVUpload;
