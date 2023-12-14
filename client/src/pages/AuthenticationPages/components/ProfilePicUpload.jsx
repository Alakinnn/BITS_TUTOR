import { Input, Logo, Container } from "@react-login-page/page8";
import React from "react";

function ProfilePicUpload() {
    const [imageURL, setImageURL] = React.useState(
        "https://i0.wp.com/www.kaleishafetters.com/wp-content/uploads/2016/02/kevin-hart-workout-final.jpg?w=806&ssl=1"
    );

    const handleImageUpload = (event) => {
        setImageURL(URL.createObjectURL(event.target.files[0]));
    };

    const openFileSelector = () => {
        // Trigger a click event on the file input using its ID
        document.getElementById("profilePic").click();
    };

    return (
        <Container>
            <Logo>
                <img src={imageURL} className="uploadedImage"></img>
            </Logo>
            <Input
                index={0}
                type="button"
                name="profileButton"
                value={"Upload Your Photo"}
                disabled={false}
                onClick={openFileSelector}
            ></Input>
            <Input
                index={6}
                id="profilePic"
                type="file"
                name="profilePic"
                accept="image/*"
                onChange={handleImageUpload}
                label="Upload Picture"
                style={{ display: "none" }}
            ></Input>
        </Container>
    );
}

export default ProfilePicUpload;
