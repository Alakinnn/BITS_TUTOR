import { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";

import Footer from "./Footer/Footer";
import "./css/Footer.css";
import StudentMeetingSession from "./MeetingSession/StudentMeetingSession";
import TutorMeetingSession from "./MeetingSession/TutorMeetingSession";
// import Navbar from "./Header/Navbar";
import Toolbar from "./Scheduling/Toolbar/Toolbar";
import ScheduleInterface from "./Scheduling/ScheduleView/ScheduleView";
// import "./css/Navbar.css";
import TutorUserCardMyProfile from "./pages/ProfilePages/components/TutorUserCardMyProfile";
import TutorPublicProfilePage from "./pages/ProfilePages/PublicProfile/TutorPublicProfilePage";
import StudentPublicProfilePage from "./pages/ProfilePages/PublicProfile/StudentPublicProfilePage";
import MyProfilePage from "./pages/ProfilePages/MyProfile/MyProfilePage";
import LoginTest from "./pages/AuthenticationPages/Login/LoginTest";
import StudentRegisterPage from "./pages/AuthenticationPages/Register/StudentRegister";
import TutorRegisterPage from "./pages/AuthenticationPages/Register/TutorRegister";

const UserContext = createContext();

function App() {
  // This is temporary, will have to implement login feature
  // Change the role to view the different profile pages
  const [user, setUser] = useState({
    _id: "123",
    role: "tutor",
    username: "John Doe",
    email: "john@gmail.com",
    tags: ["C++", "Java", "Python", "JavaScript"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    socialLinks: [
      "https://github.com/johndoe",
      "https://www.linkedin.com/in/john-doe-123456789/",
      "https://www.facebook.com/johndoe",
    ],
    hourlyRate: 20,
    profilePicUrl:
      "https://hips.hearstapps.com/hmg-prod/images/Kevin-Hart_GettyImages-450909048.jpg",
    cvUrl:
      "https://resumegenius.com/wp-content/uploads/Academic-CV-Example-Hub.png",
    benefits:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  });

  // const navigate = useNavigate();
  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <Routes>
          {/* This is the test route for dev the footer */}

          <Route path="/footerTest" element={<Footer />} />
          <Route path="/student" element={<StudentMeetingSession />} />
          <Route path="/tutor" element={<TutorMeetingSession />} />
          <Route path="/toolbar" element={<Toolbar />} />
          <Route path="/scheduleInterface" element={<ScheduleInterface />} />
          <Route path="/me" element={<MyProfilePage />} />
          <Route path="/tutorProfile" element={<TutorPublicProfilePage />} />
          <Route
            path="/studentProfile"
            element={<StudentPublicProfilePage />}
          />
          <Route
            path="/tutorUserCardMyProfile"
            element={<TutorUserCardMyProfile />}
          />
          <Route path="/login" element={<LoginTest />} />
          <Route path="/register/student" element={<StudentRegisterPage />} />
          <Route path="/register/tutor" element={<TutorRegisterPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { UserContext };
