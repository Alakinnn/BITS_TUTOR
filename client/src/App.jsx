import { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";

import Footer from "./components/footer/Footer";

import StudentMeetingSession from "./MeetingSession/StudentMeetingSession";
import TutorMeetingSession from "./MeetingSession/TutorMeetingSession";
// import Navbar from "./Header/Navbar";
import Toolbar from "./Scheduling/Toolbar/Toolbar";
import ScheduleInterface from "./Scheduling/SchedulingContainer";
// import "./css/Navbar.css";
import TutorUserCardMyProfile from "./pages/ProfilePages/components/tutor/TutorUserCardMyProfile";
import TutorPublicProfilePage from "./pages/ProfilePages/PublicProfile/TutorPublicProfilePage";
import StudentPublicProfilePage from "./pages/ProfilePages/PublicProfile/StudentPublicProfilePage";
import MyProfilePage from "./pages/ProfilePages/MyProfile/MyProfilePage";
import MAMLoginPage from "./pages/AuthenticationPages/Login/LoginPage";
import StudentRegisterPage from "./pages/AuthenticationPages/Register/StudentRegister";
import TutorRegisterPage from "./pages/AuthenticationPages/Register/TutorRegister";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./pages/HomePages/HomePage";

import SearchResults from "./pages/SearchResults/SearchResult";

import Header from "./components/header/Header";
const UserContext = createContext();
export const BASE_URL = "http://139.59.105.114/api/v1";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* This is the test route for dev the footer */}
          <Route path="/" element={<HomePage />} />

          <Route path="/footerTest" element={<Footer />} />

          <Route
            path="/studentSession/:sessionId"
            element={<PrivateRoute Component={StudentMeetingSession} />}
          />
          <Route
            path="/tutorSession/:sessionId"
            element={<PrivateRoute Component={TutorMeetingSession} />}
          />
          <Route path="/toolbar" element={<Toolbar />} />
          <Route
            path="/schedule/:tutorId"
            element={<PrivateRoute Component={ScheduleInterface} />}
          />
          <Route
            path="/me"
            element={<PrivateRoute Component={MyProfilePage} />}
          />
          <Route
            path="/tutor/:tutorId"
            element={<PrivateRoute Component={TutorPublicProfilePage} />}
          />
          <Route
            path="/student/:studentId"
            element={<PrivateRoute Component={StudentPublicProfilePage} />}
          />

          <Route path="/test" element={<Header />} />
          <Route path="/login" element={<MAMLoginPage />} />

          <Route path="/register/student" element={<StudentRegisterPage />} />
          <Route path="/register/tutor" element={<TutorRegisterPage />} />
          <Route path="/search" element={<SearchResults />}>
            {" "}
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
export { UserContext };
