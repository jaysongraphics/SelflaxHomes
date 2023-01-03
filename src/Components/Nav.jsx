import React from 'react';
import { NavLink } from 'react-router-dom'



function Nav (){
  return (
      <div>
          <nav className="navBar">
          <ul>
            <li>
              <NavLink to="/" style={{ textDecoration: 'none' }}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/Bookastay" style={{ textDecoration: 'none' }}>Book A Stay</NavLink>
            </li>
            <li>
              <NavLink to="/Images" style={{ textDecoration: 'none' }}>Images</NavLink>
            </li>
            <li>
              <NavLink to="/AroundUs" style={{ textDecoration: 'none' }}>Around Us</NavLink>
            </li>
            <li>
              <NavLink to="/Amenities" style={{ textDecoration: 'none' }}>Amenities</NavLink>
            </li>
            {/* <a href="https://www.google.com/">Shop Seflax</a> */}
          </ul>
        </nav>
      </div>
  )
};


export default Nav;