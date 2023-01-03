import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img3 from '../images/b518046e-3871-4e28-af51-d8fec837ccaa.JPG'

function Amenities (){
  return (
      <div className='amenities'>
          <h2>See our Amenities </h2>
          <h2>Vea nuestras amenidades</h2>
          <h6>La Esperilla</h6>
          <Carousel className="d-block w-75" fade >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p>Living room</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <p>Living room</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <p>Living room</p>
                </Carousel.Caption>
              </Carousel.Item>
         </Carousel>
      </div>
  )
};


export default Amenities;