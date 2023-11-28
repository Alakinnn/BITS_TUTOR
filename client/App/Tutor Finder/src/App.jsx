import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useNavigate } from "react-router-dom";
import './App.css'
import axios from 'axios';
import logo from './images/address.png'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentInterface from './studentInterface'
import TutorInterface from './tutorInterface'


const mySessionID = "123" // This is a fake ID, will have to implement scheduling feature


function App() {
  // const navigate = useNavigate();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentInterface />} />
        <Route path="/student" element={<StudentInterface />} />
        <Route path="/tutor" element={<TutorInterface />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App
