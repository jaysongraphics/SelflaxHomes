import React from 'react';
import img1 from '../images/8ca021dd-0d0d-403e-8dc4-cd0c54720301.JPG'
import img2 from '../images/3686fd5a-ae1a-4edd-a51d-0405b672887d.JPG'
import img3 from '../images/b518046e-3871-4e28-af51-d8fec837ccaa.JPG'
import Carousel from 'react-bootstrap/Carousel';

function Images (){
  return (
    <div className='images-caro'>
      <h1>Images</h1>
      <h6>La Esperilla</h6>
          <Carousel className="d-block w-50">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p>Bedroom</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img2}
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

          {/* <h6>La Julia</h6>
          <Carousel className="d-block w-25">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p>Bedroom</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img2}
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
          </Carousel> */}
    </div>
  )
};


export default Images;