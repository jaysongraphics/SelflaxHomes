import React from 'react';
import ig from '../images/ig.png'

function Footer (){
  return (
    <footer className="footer">
        <div id="footer1">
          <img src={ig} alt="ig-Logo" height="40px" /><p>@SelflaxHomes</p>
          <p>© 2023 All Rights Reserved by SelflaxHomes | Designed by JaysonGraphics</p>
        </div>
    </footer>
  )
};


export default Footer;