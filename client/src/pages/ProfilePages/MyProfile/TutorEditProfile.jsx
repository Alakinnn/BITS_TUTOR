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
import Tag from "../../ProfilePages/components/Tag";
import TagList from "../../ProfilePages/components/TagList";
import background from "/public/images/registerbackground.jpg";
import { UserContext } from "../../../../App";

const TutorEditProfile = () => {
  const user = React.useContext(UserContext);
  const [data, setData] = React.useState({});
  const [tags, setTags] = React.useState([]);
  const [socialLinks, setSocialLinks] = React.useState([null]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newData = Object.fromEntries(formData);
    formatData(newData);
    console.log("Submitted:", data);
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

    setData({ ...newData, socialLinks, tags, role: "tutor" }); // Add the socialLinks array to the newData object
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
          placeholder={user.username}
        />

        <Username
          index={7}
          keyname="email"
          label="Email"
          name="email"
          placeholder={user.email}
        />

        <Password
          index={8}
          label="Password"
          placeholder="Password"
          name={user.password}
        />

        <Username
          index={9}
          keyname="description"
          label="Short Description"
          name="description"
          placeholder={user.description}
        />

        <Username
          index={10}
          keyname="hourlyRate"
          label="Hourly Rate (USD)"
          name="hourlyRate"
          placeholder="Your Hourly Rate (USD)"
          type={user.hourlyRate}
        />

        <Username
          index={11}
          keyname="benefits"
          label="Student Benefits"
          name="benefits"
          placeholder={user.benefits}
        />

        <Username keyname="tags_label" visible={false} index={12}>
          Tags (separated by commas)
        </Username>

        <Input
          index={13}
          name="tags"
          placeholder="Add New Tags"
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

        <Submit type="submit">Save</Submit>
        <Banner>
          <img src={background}></img>
        </Banner>

        <Title visible={false} />
      </LoginPage>
    </form>
  );
};

export default TutorEditProfile;
