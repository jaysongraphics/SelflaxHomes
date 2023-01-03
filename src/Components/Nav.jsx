import React from 'react';
import { NavLink } from 'react-router-dom'



function Nav (){
  return (
      <div>
          <h1>Explore what's around</h1>
          <nav className="navBar">
          <ul>
            <li>
              <NavLink type="button" className="btn btn-dark" to="/" style={{ textDecoration: 'none' }}>Home</NavLink>
            </li>
            <li>
              <NavLink type="button" className="btn btn-dark" to="/Bookastay" style={{ textDecoration: 'none' }}>Book A Stay</NavLink>
            </li>
            <li>
              <NavLink type="button" className="btn btn-dark" to="/Images" style={{ textDecoration: 'none' }}>Images</NavLink>
            </li>
            <li>
              <NavLink type="button" className="btn btn-dark" to="/AroundUs" style={{ textDecoration: 'none' }}>Around Us</NavLink>
            </li>
            <li>
              <NavLink type="button" className="btn btn-dark" to="/Amenities" style={{ textDecoration: 'none' }}>Amenities</NavLink>
            </li>
            {/* <a href="https://www.google.com/">Shop Seflax</a> */}
          </ul>
        </nav>
      </div>
  )
};


export default Nav;