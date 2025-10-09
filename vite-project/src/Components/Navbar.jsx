import React from 'react';
import { FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/apps'>Apps</NavLink></li>
            <li><NavLink to='/installation'>Installation</NavLink></li>
          </ul>
        </div>
        <a className="btn bg-white border-0 text-xl text-[#632EE3]">
          <img src="/assets/logo.png" alt="logo" style={{ width: '40px', maxWidth: '90%' }} />HERO.IO
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-md">
          <li>
            <NavLink className='hover:text-[#632EE3] hover:underline hover:decoration-[#632EE3] hover:bg-transparent' to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className='hover:text-[#632EE3] hover:underline hover:decoration-[#632EE3] hover:bg-transparent' to='/apps'>Apps</NavLink>
          </li>
          <li>
            <NavLink className='hover:text-[#632EE3] hover:underline hover:decoration-[#632EE3] hover:bg-transparent' to='/installation'>Installation</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a href='https://github.com/sohelma' className="btn bg-[#632EE3] text-white">
          <FaGithub />Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
