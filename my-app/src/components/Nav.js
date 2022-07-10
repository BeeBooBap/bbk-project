import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

  const navStyle = {
    color: 'white',
    display: 'inline'
  };

  return (
    <nav>
        <h3>Logo</h3>  
        <ul className="nav-links">
          <Link style={navStyle} to='/'>
            <li>Home</li>
          </Link>
          <Link style={navStyle} to='/matter'>
            <li>Matter</li>
          </Link>

        </ul>
    </nav>
  );
}

export default Nav;