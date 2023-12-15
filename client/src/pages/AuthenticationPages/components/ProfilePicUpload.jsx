import { Input, Logo, Container } from "@react-login-page/page8";
import React from "react";
import ImageUpload from "./ImageUpload";

function ProfilePicUpload({ index }) {
    return (
        <ImageUpload
            index={index}
            fieldName="profilePic"
            buttonText="Upload Your Photo"
            cssClass="profilePicture"
            defaultImageUrl="https://i0.wp.com/www.kaleishafetters.com/wp-content/uploads/2016/02/kevin-hart-workout-final.jpg?w=806&ssl=1"
        />
    );
}

export default ProfilePicUpload;
