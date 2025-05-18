import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    const links=<>
        <li><NavLink>Home</NavLink></li>

        <li><NavLink>Users</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm px-20">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {
        links
       }
      </ul>
    </div>
    <Link className="btn btn-ghost text-xl">Book</Link>
  </div>
  <div className="navbar-center hidden sm:flex">
    <ul className="menu menu-horizontal px-1 gap-5">
     {links}
    </ul>
  </div>
  <div className="navbar-end gap-6">
   <Link to={'/login'}>Login</Link>
   <Link to={'/register'}>Register</Link>
  </div>
</div>
    );
};

export default Navbar;