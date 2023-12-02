import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from "./footer";
import './footer.css';
import StudentInterface from './studentInterface';
import TutorInterface from './tutorInterface';


const mySessionID = "123" // This is a fake ID, will have to implement scheduling feature


function App() {
  // const navigate = useNavigate();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentInterface />} />
        {/* This is the test route for dev the footer */}
        <Route path="/footerTest" element={<Footer />} />
        <Route path="/student" element={<StudentInterface />} />
        <Route path="/tutor" element={<TutorInterface />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App
