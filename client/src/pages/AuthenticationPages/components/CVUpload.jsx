import React from "react";
import ImageUpload from "./ImageUpload";

function CVUpload({ index }) {
    return (
        <ImageUpload
            index={index}
            fieldName="cv"
            buttonText="Upload Your CV"
            cssClass="cv"
            defaultImageUrl="https://www.rwlasvegas.com/wp-content/uploads/2022/09/Kevin-Hart-Reality-Check-Press-Headshot-768x1024.jpeg"
        />
    );
}

export default CVUpload;
