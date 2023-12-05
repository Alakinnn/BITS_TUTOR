import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const printAllSessions = async () => {
        const response = await axios.get(`http://139.59.105.114/api/v1/session`);
        console.log(response);
    }
    printAllSessions();
  return (
    <nav>
        <div id="Logo">logo</div>
        <ul>
            <li>
                <Link to="/footerTest">Footer</Link>
            </li>
            <li>
                <Link to="/tutor">Live code</Link>
            </li>
            <li>
                <Link to="/student">Call Meeting</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar