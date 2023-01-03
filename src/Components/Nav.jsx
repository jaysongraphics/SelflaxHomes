import React from 'react';
import { NavLink } from 'react-router-dom'

function Nav (){
  return (
      <div>
          <nav className="navBar">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Bookastay">Book A Stay</NavLink>
            </li>
            <li>
              <NavLink to="/Images">Images</NavLink>
            </li>
            <li>
              <NavLink to="/Amenities">Amenities</NavLink>
            </li>
            <li>
              <NavLink to="/AroundUs">Around Us</NavLink>
            </li>
            {/* <a href="https://www.google.com/">Shop Seflax</a> */}
          </ul>
        </nav>
      </div>
  )
};


export default Nav;