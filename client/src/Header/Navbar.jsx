import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
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