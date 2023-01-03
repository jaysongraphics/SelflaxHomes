import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img3 from '../images/b518046e-3871-4e28-af51-d8fec837ccaa.JPG'

function Amenities (){
  return (
      <div>
          <h1>See our Amenities</h1>
          <h6>La Esperilla</h6>
          <Carousel className="d-block w-25" fade >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
         </Carousel>
      </div>
  )

};


export default Amenities;