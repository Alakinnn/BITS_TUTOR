import React, { useRef } from "react";
import LoginPage, {
    Username,
    Password,
    Submit,
    Title,
    Logo,
    Input,
    Banner,
    Container,
    Render,
    Button,
} from "@react-login-page/page11";
// import LoginLogo from "react-login-page/logo";
// import banner from "/public/images/session.png";
// import { MDBCardImage } from "mdb-react-ui-kit";
// import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";
import "../styles/StudentRegister.css";
import SocialLinkInput from "../components/SocialLinkInput";
import ProfilePicUpload from "../components/ProfilePicUpload";
import SocialLinksList from "../components/SocialLinksList";

const StudentRegisterPage = () => {
    const [data, setData] = React.useState({});

    const [socialLinks, setSocialLinks] = React.useState([null]);

    const handleAdd = () => {
        const newSocialLinks = [...socialLinks, " "]; // Create a new input
        setSocialLinks(newSocialLinks); // Update the state with the new inputs
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newData = Object.fromEntries(formData);
        setData({ ...newData });
        console.log("New data", newData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <LoginPage>
                <ProfilePicUpload />
                <Username
                    index={2}
                    label="Full Name"
                    name="username"
                    placeholder="Your Full Name"
                />
                <Password
                    index={3}
                    label="Password"
                    placeholder="Password"
                    name="password"
                />

                <Submit type="submit">Confirm</Submit>

                <Username keyname="username_rule" visible={false} index={4}>
                    Social Links
                </Username>

                <SocialLinksList
                    socialLinks={socialLinks}
                    handleAdd={handleAdd}
                />

                <Banner>
                    <img src="https://hips.hearstapps.com/hmg-prod/images/kevin-main-image-1579114576.png"></img>
                </Banner>

                <Title visible={false} />
            </LoginPage>
        </form>
    );
};

export default StudentRegisterPage;
