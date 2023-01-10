import React from 'react';
import './styles/Navbar.scss'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <a className="nav-link" href="/">Home</a>
      <a className="nav-link" href="/projects">Projects</a>
      <a className="nav-link" href="/contact">Contact</a>
    </nav>
  );
};

export default Navbar;
