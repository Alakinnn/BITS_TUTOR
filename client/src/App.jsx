import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './css/App.css';

import Footer from "./Footer/Footer";
import './css/Footer.css';
import StudentMeetingSession from './MeetingSession/StudentMeetingSession';
import TutorMeetingSession from './MeetingSession/TutorMeetingSession';
// import Navbar from "./Header/Navbar";
// import LoginTest from "./Login/LoginTest";
// import PrintAllTutorSessions from "./Login/PrintAllTutorSessions";
import CreateSession from "./Test/CreateSession";
import Toolbar from "./Scheduling/Toolbar/Toolbar";
import SchedulingContainer from "./Scheduling/SchedulingContainer";
import BookingSession from "./Scheduling/Toolbar/BookingSession";
import ToolbarRequest from "./Scheduling/Toolbar/ToolbarRequest";
import './css/Navbar.css';




// const mySessionID = "123"; // This is a fake ID, will have to implement scheduling feature
   

function App() {
  // const navigate = useNavigate();
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<CreateSession />} />
        {/* This is the test route for dev the footer */}
        
        <Route path="/footerTest" element={<Footer />} />
        <Route path="/student" element={<StudentMeetingSession />} />
        <Route path="/tutor" element={<TutorMeetingSession />} />
        <Route path="/toolbar" element={<Toolbar />} />
        <Route path="/scheduleInterface" element={<SchedulingContainer />} />
        <Route path="/bookingSession" element={<BookingSession/>} />
        <Route path="/toolbarRequest" element={<ToolbarRequest/>} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App

