import React from "react";
import GuestHeader from "./GuestHeader";
import StudentHeader from "./StudentHeader";

const isAuthenticated = () => {
  return true;
};
const role = "student";

function Header() {
  if (!isAuthenticated()) {
    return <GuestHeader />;
  }

  if (role == "student") {
    return <StudentHeader />;
  }
}

export default Header;
