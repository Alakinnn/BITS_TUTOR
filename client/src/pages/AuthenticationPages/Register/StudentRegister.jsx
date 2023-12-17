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

const StudentRegisterPage = () => {
  const [data, setData] = React.useState({});
  const [arrangedData, setArrangedData] = React.useState({}); // Create a copy of the original data

  const reArrangeData = (newData) => {
    const socialLinks = [];
    setArrangedData(newData);
    // Loop through the keys in the data object
    Object.keys(arrangedData).forEach((key) => {
      // Check if the key starts with "socialLink-"
      if (key.startsWith("socialLink-")) {
        socialLinks.push(arrangedData[key]); // Push social links to the socialLinks array
        delete arrangedData[key]; // Remove the social link key from the newData object
      }
    });
    setArrangedData({ ...newData, socialLinks: socialLinks }); // Add the socialLinks array to the newData object
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
    setData(newData);
    reArrangeData(newData);

    console.log("Arranged data", arrangedData);
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
        <Password
          index={4}
          label="Password"
          placeholder="Password"
          name="password"
        />

        <Submit type="submit">Confirm</Submit>

        <Username keyname="username_rule" visible={false} index={5}>
          Social Links
        </Username>

        <SocialLinksList
          baseIndex={6}
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
