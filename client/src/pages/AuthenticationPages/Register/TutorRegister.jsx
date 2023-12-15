import React from "react";
import LoginPage, {
    Username,
    Password,
    Submit,
    Title,
    Banner,
} from "@react-login-page/page11";
import "react-image-upload/dist/index.css";
import "../styles/ImageUpload.css";
import ProfilePicUpload from "../components/ProfilePicUpload";
import SocialLinksList from "../components/SocialLinksList";
import CVUpload from "../components/CVUpload";

const TutorRegisterPage = () => {
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
                <ProfilePicUpload index={0} />
                <CVUpload index={3} />

                <Username
                    index={6}
                    label="Full Name"
                    name="username"
                    placeholder="Your Full Name"
                />
                <Password
                    index={7}
                    label="Password"
                    placeholder="Password"
                    name="password"
                />

                <Username keyname="username_rule" visible={false} index={8}>
                    Social Links
                </Username>

                <SocialLinksList
                    baseIndex={9}
                    socialLinks={socialLinks}
                    handleAdd={handleAdd}
                />

                <Submit type="submit">Confirm</Submit>
                <Banner>
                    <img src="https://hips.hearstapps.com/hmg-prod/images/kevin-main-image-1579114576.png"></img>
                </Banner>

                <Title visible={false} />
            </LoginPage>
        </form>
    );
};

export default TutorRegisterPage;
