import React from "react";
import LoginPage, { Input } from "@react-login-page/page11";

function SocialLinkInput({ index, order, placeholder, isLast, handleAdd }) {
  return (
    <Input
      index={index}
      label="Social Link"
      name={`socialLink-${order}`}
      placeholder={placeholder}
    >
      {isLast ? (
        <button onClick={handleAdd} type="button">
          Add
        </button>
      ) : null}
    </Input>
  );
}

export default SocialLinkInput;
