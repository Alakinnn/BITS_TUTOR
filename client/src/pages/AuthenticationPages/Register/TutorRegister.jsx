import React from "react";
import LoginPage, {
  Username,
  Password,
  Submit,
  Title,
  Banner,
  Input,
  Logo,
  Textarea,
} from "@react-login-page/page11";
import "react-image-upload/dist/index.css";
import "../styles/ImageUpload.css";
import LogoComponent from "../../../components/header/Logo";
import ProfilePicUpload from "../components/ProfilePicUpload";
import SocialLinksList from "../components/SocialLinksList";
import CVUpload from "../components/CVUpload";
import TagList from "../../ProfilePages/components/TagList";
import { registerUser } from "../services/auth";
import { useAuth } from "../../../contexts/AuthContext";
import background from "/images/registerbackground.jpg";

const TutorRegisterPage = () => {
  const [tags, setTags] = React.useState([]);
  const { storeAuth } = useAuth();
  const [socialLinks, setSocialLinks] = React.useState([null]);

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
    window.location.href = "/me";
  };

  const handleAdd = () => {
    const newSocialLinks = [...socialLinks, " "]; // Create a new input
    setSocialLinks(newSocialLinks); // Update the state with the new inputs
  };

  const handleTagChange = (event) => {
    const newTags = event.target.value.split(",");
    setTags(newTags);
  };

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

    const tags = newData.tags.split(",");
    delete newData.tags;

    return { ...newData, socialLinks, tags, role: "tutor" }; // Add the socialLinks array to the newData object
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <LoginPage>
        <ProfilePicUpload index={0} />
        <CVUpload index={3} />

        <Username
          index={6}
          label="Full Name"
          name="username"
          placeholder="Your Full Name"
          minLength={8}
        />

        <Username
          index={7}
          type="email"
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
          min={0}
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
          <img src={background}></img>
        </Banner>

        <Title visible={false} />
        <Logo>
          <LogoComponent></LogoComponent>
        </Logo>
      </LoginPage>
    </form>
  );
};

export default TutorRegisterPage;
