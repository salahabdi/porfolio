import React from 'react';
import './styles/Navbar.scss';
import { NavLink } from 'react-router-dom';


const Navbar = () =>  {
  return (
    <nav className='navbar'>
      <div className='navbar__button'>
        <NavLink exact to='/' activeClassName='navbar__active'>
          Home
        </NavLink>
      </div>
      <div className='navbar__button'>
        <NavLink to='/projects' activeClassName='navbar__active'>
          Projects
        </NavLink>
      </div>
      <div className='navbar__button'>
        <NavLink to='/contact' activeClassName='navbar__active'>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
