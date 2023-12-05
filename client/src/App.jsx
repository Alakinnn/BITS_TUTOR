import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './css/App.css';

import Footer from "./Footer/Footer";
import './css/Footer.css';
import StudentMeetingSession from './MeetingSession/StudentMeetingSession';
import TutorMeetingSession from './MeetingSession/TutorMeetingSession';
import Navbar from "./Header/Navbar";
import './css/Navbar.css';
import Schedule from "./Scheduling/Schedule";




const mySessionID = "123" // This is a fake ID, will have to implement scheduling feature


function App() {
  // const navigate = useNavigate();
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Schedule />} />
        {/* This is the test route for dev the footer */}
        
        <Route path="/footerTest" element={<Footer />} />
        <Route path="/student" element={<StudentMeetingSession />} />
        <Route path="/tutor" element={<TutorMeetingSession />} />
        
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App
