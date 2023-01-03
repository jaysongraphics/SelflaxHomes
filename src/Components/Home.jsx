import React from 'react';
import { Link } from 'react-router-dom'
import pdf1 from '../images/English.pdf'
import pdf2 from '../images/spanish.pdf'

function Home (){
  return (
      <div className='home'>
          <h1>Welcome to Selflax Homes!</h1>
          <p>Your Home away from home</p>

          <div>
            <h1>Download Our welcome guide!</h1>
              <h1>English</h1>
              <Link to={pdf1} target="_blank" download>Download</Link>
              <h1>Español</h1>
              <Link to={pdf2} target="_blank" download>Download</Link>
          </div>
      </div>
  )
};


export default Home;