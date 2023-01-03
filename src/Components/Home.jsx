import React from 'react';
import { Link } from 'react-router-dom'
import pdf1 from '../images/English.pdf'
import pdf2 from '../images/spanish.pdf'
import img from '../images/building.jpg'
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap';


function Home (){

  return (
      <div className='home'>
          <h4>Welcome to Selflax Homes!</h4>
          <h4>¡Bienvenido a Selflax Homes!</h4>
          {/* <img className="logoImage" src={img} alt="SelflaxHomes-Logo" width="250" height="260" />
          <br /> */}
          <h6>English</h6>
          <p>Welcome to SelflaxHomes! We are excited to host you and ensure your stay is comfortable and memorable. Our team is dedicated to making your time with us exceptional. Thank you for choosing us as your home away from home. We look forward to welcoming you and making your stay unforgettable!</p>
        
          <h8>Español</h8>
          <p>¡Bienvenido a SelflaxHomes! Nos complace recibirlo y asegurarnos de que su estadía sea cómoda y memorable. Nuestro equipo está dedicado a hacer que su tiempo con nosotros sea excepcional. Gracias por elegirnos como su hogar lejos del hogar. ¡Esperamos darle la bienvenida y hacer que su estancia sea inolvidable!</p>
         
          <NavLink to="/Bookastay" className="btn btn-dark" variant="primary">Book | Reserva</NavLink>
          <Button id="guidebook" href="https://www.airbnb.com/s/guidebooks?refinement_paths[]=/guidebooks/4275403" target="_blank" rel="noreferrer" className="btn btn-dark" variant="primary">guidebook | guía</Button>

          <hr />
         
            <h6>Download Our welcome guide!</h6>
            <h6>¡Descarga nuestra guía de bienvenida!</h6>
          <div className="welcome-guide">
              <br />
              <h8>English </h8>
              <Link to={pdf1} target="_blank" rel="noreferrer" className="btn btn-dark" variant="primary">Download </Link>
              <h8>Español </h8>
              <Link to={pdf2} target="_blank" rel="noreferrer" className="btn btn-dark" variant="primary">Descargar </Link>
          </div>
      </div>
  )
};


export default Home;