import React from 'react';
import ig from '../images/ig.png'

function Footer (){
  return (
    <footer className="footer">
        <a id="ig-footer" href="https://www.instagram.com/selflaxhomes/?hl=en" target="_blank" rel="noreferrer"><img src={ig} alt="ig-Logo" height="40px" /></a>
        <p>@SelflaxHomes</p>
        <div id="footer1">
          <p>© 2023 All Rights Reserved by SelflaxHomes | Designed by JaysonGraphics</p>
        </div>
    </footer>
  )
};


export default Footer;