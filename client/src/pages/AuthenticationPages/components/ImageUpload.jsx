import { Input, Logo, Container } from "@react-login-page/page8";
import { useState } from "react";

function ImageUpload({
    index,
    fieldName,
    buttonText,
    cssClass,
    defaultImageUrl,
}) {
    const [imageURL, setImageURL] = useState(defaultImageUrl);

    const handleImageUpload = (event) => {
        setImageURL(URL.createObjectURL(event.target.files[0]));
    };

    const openFileSelector = () => {
        // Trigger a click event on the file input using its ID
        document.getElementById(fieldName).click();
    };

    return (
        <Container>
            <Input
                index={index}
                name={`${fieldName}Image`}
                style={{ display: "none" }}
            >
                <img src={imageURL} className={cssClass}></img>
            </Input>

            <Input
                index={index + 1}
                type="button"
                name={`${fieldName}Button`}
                value={buttonText}
                disabled={false}
                onClick={openFileSelector}
            ></Input>

            <Input
                index={index + 2}
                id={fieldName}
                type="file"
                name={fieldName}
                accept="image/*"
                onChange={handleImageUpload}
                label="Upload Picture"
                style={{ display: "none" }}
            ></Input>
        </Container>
    );
}

export default ImageUpload;
