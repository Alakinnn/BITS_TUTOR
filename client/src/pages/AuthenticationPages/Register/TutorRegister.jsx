import React from "react";
import LoginPage, {
    Username,
    Password,
    Submit,
    Title,
    Banner,
    Input,
    Textarea,
} from "@react-login-page/page11";
import "react-image-upload/dist/index.css";
import "../styles/ImageUpload.css";
import ProfilePicUpload from "../components/ProfilePicUpload";
import SocialLinksList from "../components/SocialLinksList";
import CVUpload from "../components/CVUpload";
import TagList from "../../ProfilePages/components/TagList";
import { registerUser } from "../services/auth";
import { useAuth } from "../../../contexts/AuthContext";

const TutorRegisterPage = () => {
    const [data, setData] = React.useState({});
    const [tags, setTags] = React.useState([]);
    const { loginUser } = useAuth();
    const [socialLinks, setSocialLinks] = React.useState([null]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const newData = Object.fromEntries(formData);

        await formatData(newData);
        const response = await registerUser(data);

        if (!response) {
            // Alert error message
            alert("Error registering user");
            return;
        }

        const { user, token } = response;

        await loginUser({ newUser: user, newToken: token });

        alert("Successfully registered user");
        console.log("New User:", user);
    };

    const handleAdd = () => {
        const newSocialLinks = [...socialLinks, " "]; // Create a new input
        setSocialLinks(newSocialLinks); // Update the state with the new inputs
    };

    const handleTagChange = (event) => {
        const newTags = event.target.value.split(",");
        setTags(newTags);
    };

    const formatData = async (newData) => {
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

        const tags = newData.tags.split(",");
        delete newData.tags;

        await setData({ ...newData, socialLinks, tags, role: "tutor" }); // Add the socialLinks array to the newData object
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

                <Username
                    index={7}
                    keyname="email"
                    label="Email"
                    name="email"
                    placeholder="Your Email"
                />

                <Password
                    index={8}
                    label="Password"
                    placeholder="Password"
                    name="password"
                />

                <Username
                    index={9}
                    keyname="description"
                    label="Short Description"
                    name="description"
                    placeholder="Tell us about yourself"
                />

                <Username
                    index={10}
                    keyname="hourlyRate"
                    label="Hourly Rate (USD)"
                    name="hourlyRate"
                    placeholder="Your Hourly Rate (USD)"
                    type="number"
                />

                <Username
                    index={11}
                    keyname="benefits"
                    label="Student Benefits"
                    name="benefits"
                    placeholder="What will students get from you?"
                />

                <Username keyname="tags_label" visible={false} index={12}>
                    Tags (separated by commas)
                </Username>

                <Input
                    index={13}
                    name="tags"
                    placeholder="Add Tags"
                    onChange={handleTagChange}
                ></Input>

                <Input
                    index={14}
                    name="tag-preview"
                    disabled={true}
                    style={{ display: "none" }}
                >
                    <TagList tags={tags} />
                </Input>
                <Username keyname="username_rule" visible={false} index={15}>
                    Social Links
                </Username>

                <SocialLinksList
                    baseIndex={16}
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
