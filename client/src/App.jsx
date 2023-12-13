import { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";

import Footer from "./Footer/Footer";
import "./css/Footer.css";
import StudentMeetingSession from "./MeetingSession/StudentMeetingSession";
import TutorMeetingSession from "./MeetingSession/TutorMeetingSession";
// import Navbar from "./Header/Navbar";
// import LoginTest from "./Login/LoginTest";
import PrintAllTutorSessions from "./Login/PrintAllTutorSessions";
import Toolbar from "./Scheduling/Toolbar";
import ScheduleInterface from "./Scheduling/ScheduleView";
// import "./css/Navbar.css";
import TutorPublicProfilePage from "./pages/ProfilePages/PublicProfile/TutorPublicProfilePage";
import StudentPublicProfilePage from "./pages/ProfilePages/PublicProfile/StudentPublicProfilePage";
import MyProfilePage from "./pages/ProfilePages/MyProfile/MyProfilePage";

const UserContext = createContext();

function App() {
    // This is temporary, will have to implement login feature
    // Change the role to view the different profile pages
    const [user, setUser] = useState({
        _id: "123",
        role: "student",
        username: "John Doe",
        email: "john@gmail.com",
    });

    // const navigate = useNavigate();
    return (
        <BrowserRouter>
            <UserContext.Provider value={user}>
                <Routes>
                    <Route path="/" element={<PrintAllTutorSessions />} />
                    {/* This is the test route for dev the footer */}

                    <Route path="/footerTest" element={<Footer />} />
                    <Route
                        path="/student"
                        element={<StudentMeetingSession />}
                    />
                    <Route path="/tutor" element={<TutorMeetingSession />} />
                    <Route path="/toolbar" element={<Toolbar />} />
                    <Route
                        path="/scheduleInterface"
                        element={<ScheduleInterface />}
                    />
                    <Route path="/me" element={<MyProfilePage />} />
                    <Route
                        path="/tutorProfile"
                        element={<TutorPublicProfilePage />}
                    />
                    <Route
                        path="/studentProfile"
                        element={<StudentPublicProfilePage />}
                    />
                    <Route
                        path="/login"
                        element={<login />}
                    />
                    
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
export { UserContext };
