import React from "react";
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
import LoginLogo from "react-login-page/logo";
import banner from "/public/images/session.png";
import { MDBCardImage } from "mdb-react-ui-kit";

import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";
import "/src/css/AuthenticationPages/Register/StudentRegister.css";
import SocialLinkInput from "../components/SocialLinkInput";

const StudentRegisterPage = () => {
  const [data, setData] = React.useState({});
  const [imageURL, setImageURL] = React.useState(null);

  const [socialLinks, setSocialLinks] = React.useState(["Add your socials"]);

  const handleAdd = () => {
    const newSocialLinks = [...socialLinks, SocialLinkInput]; // Create a new input
    setSocialLinks(newSocialLinks); // Update the state with the new inputs
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setData({ ...data });
    console.log(data);
    console.log("Submitted");
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    setImageURL(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <form onSubmit={handleSubmit}>
      <LoginPage>
        <Logo>
          <img src={imageURL} className="uploadedImage"></img>
        </Logo>
        <Container>
          <Input
            index={0}
            type="file"
            name="profilePic"
            accept="image/*"
            onChange={handleImageUpload}
          ></Input>
          <Input index={0} type="button">
            Upload Picture
          </Input>
        </Container>

        <Username
          index={1}
          label="Full Name"
          name="username"
          placeholder="Your Full Name"
        />
        <Password
          index={2}
          label="Password"
          placeholder="Password"
          name="password"
        />

        <Submit type="submit">Confirm</Submit>

        <Username keyname="username_rule" visible={false} index={3}>
          Social Links
        </Username>
        {socialLinks.map((link, index) => {
          let isLast = index + 1 === socialLinks.length;

          return (
            <SocialLinkInput
              index={4 + index}
              order={index}
              placeholder={link}
              isLast={isLast}
              handleAdd={handleAdd}
              key={index}
            />
          );
        })}

        <Banner>
          <img src="https://hips.hearstapps.com/hmg-prod/images/kevin-main-image-1579114576.png"></img>
        </Banner>

        <Title visible={false} />
      </LoginPage>
    </form>
  );
};

export default StudentRegisterPage;
