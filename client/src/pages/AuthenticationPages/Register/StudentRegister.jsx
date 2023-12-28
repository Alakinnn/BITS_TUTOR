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
import { registerUser } from "../services/auth";
import { useAuth } from "../../../contexts/AuthContext";
import ProfilePicUpload from "../components/ProfilePicUpload";
import SocialLinksList from "../components/SocialLinksList";
import background from "/public/images/registerbackground.jpg";

const StudentRegisterPage = () => {
  const { storeAuth } = useAuth();
  const [socialLinks, setSocialLinks] = React.useState([null]);

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

    return { ...newData, socialLinks, role: "student" }; // Add the socialLinks array to the newData object
  };

  const handleAdd = () => {
    const newSocialLinks = [...socialLinks, " "]; // Create a new input
    setSocialLinks(newSocialLinks); // Update the state with the new inputs
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    let newData = Object.fromEntries(formData);

    newData = formatData(newData);
    console.log("Submitted:", newData);
    const response = await registerUser(newData);

    if (!response) {
      // Alert error message
      alert("Error registering user");
      return;
    }

    const { user, token } = response;

    await storeAuth({ newUser: user, newToken: token });

    alert("Successfully registered user");
    console.log("New User:", user);
    window.location.href = "/";
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
          minLength={8}
        />

        <Username
          index={4}
          type="email"
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
          <img src={background}></img>
        </Banner>

        <Title visible={false} />
      </LoginPage>
    </form>
  );
};

export default StudentRegisterPage;
