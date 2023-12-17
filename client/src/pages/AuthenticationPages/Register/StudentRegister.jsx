import React from "react";
import LoginPage, {
    Username,
    Password,
    Submit,
    Title,
    Banner,
    Input,
} from "@react-login-page/page11";
import "react-image-upload/dist/index.css";
import "../styles/ImageUpload.css";
import ProfilePicUpload from "../components/ProfilePicUpload";
import SocialLinksList from "../components/SocialLinksList";

const StudentRegisterPage = () => {
    const [data, setData] = React.useState({});

    const formatData = (newData) => {
        const socialLinks = [];

        Object.keys(newData).forEach((key) => {
            if (!key.startsWith("socialLink-")) {
                return;
            }

            if (newData[key] === "") {
                delete newData[key];
                return;
            }

            socialLinks.push(newData[key]); // Push social links to the socialLinks array
            delete newData[key]; // Remove the social link key from the newData object
        });

        setData({ ...newData, socialLinks: socialLinks, role: "student" }); // Add the socialLinks array to the newData object
    };

    const [socialLinks, setSocialLinks] = React.useState([null]);

    const handleAdd = () => {
        const newSocialLinks = [...socialLinks, " "]; // Create a new input
        setSocialLinks(newSocialLinks); // Update the state with the new inputs
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newData = Object.fromEntries(formData);

        formatData(newData);

        console.log("Submitted: ", data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <LoginPage>
                <ProfilePicUpload index={0} />
                <Username
                    index={3}
                    label="Full Name"
                    name="username"
                    placeholder="Your Full Name"
                />

                <Username
                    index={4}
                    keyname="email"
                    label="Email"
                    name="email"
                    placeholder="Your Email"
                />

                <Password
                    index={5}
                    label="Password"
                    placeholder="Password"
                    name="password"
                />

                <Submit type="submit">Confirm</Submit>

                <Username keyname="username_rule" visible={false} index={6}>
                    Social Links
                </Username>

                <SocialLinksList
                    baseIndex={7}
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
