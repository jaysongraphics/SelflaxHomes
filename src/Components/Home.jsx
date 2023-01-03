import React from 'react';
import { Link } from 'react-router-dom'
import pdf1 from '../images/English.pdf'
import pdf2 from '../images/spanish.pdf'
import img from '../images/building.jpg'

function Home (){
  return (
      <div className='home'>
          <h1>Welcome to Selflax Homes!</h1>
          <p>Welcome to SelflaxHomes! We are a company that prides ourselves on providing comfortable and welcoming accommodations for travelers and vacationers. When you stay with us, you can expect to feel right at home. Our team is dedicated to ensuring that your stay with us is enjoyable and memorable. Thank you for choosing SelflaxHomes as your home away from home. We look forward to welcoming you and hope you have a wonderful stay with us.</p>
          <p>¡Bienvenido a SelflaxHomes! Somos una empresa que se enorgullece de brindar alojamiento cómodo y acogedor para viajeros y vacacionistas. Cuando se hospede con nosotros, puede esperar sentirse como en casa. Nuestro equipo está dedicado a garantizar que su estadía con nosotros sea placentera y memorable. Gracias por elegir SelflaxHomes como su hogar lejos del hogar. Esperamos darle la bienvenida y esperamos que tenga una estancia maravillosa con nosotros.</p>
          <img className="logoImage" src={img} alt="SelflaxHomes-Logo" width="400" height="600" />
          <hr />
            <h3>Download Our welcome guide!</h3>
          <div className="welcome-guide">
              <h6>English</h6>
              <Link to={pdf1} target="_blank" rel="noreferrer" className="btn btn-dark" variant="primary">Download</Link>
              <h6>Español</h6>
              <Link to={pdf2} target="_blank" rel="noreferrer" className="btn btn-dark" variant="primary">Download</Link>
          </div>
      </div>
  )
};


export default Home;