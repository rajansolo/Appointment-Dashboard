import React from 'react';
import {Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <p className='navbar_logo'><Link to="/">Navbar</Link></p>
        <p>Profile</p>
    </div>
  )
}

export default Navbar