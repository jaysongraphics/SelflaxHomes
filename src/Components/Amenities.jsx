import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/11.jpg'
import img2 from '../images/10.jpg'
import img3 from '../images/7.jpg'
import img4 from '../images/8.jpg'
import img5 from '../images/9.jpg'
import img6 from '../images/44.jpg'
import img7 from '../images/4.jpg'
import img8 from '../images/12.jpg'
import img9 from '../images/13.jpg'
import img10 from '../images/41.jpg'

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
                  src={img1}
                  alt="First slide"
                />
              <Carousel.Caption>
                <p>Pool Area</p>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img2}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <p>Pool Area</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="Third slide"
                />

              <Carousel.Caption>
                  <p>GYM</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img4}
                  alt="Third slide"
                />

              <Carousel.Caption>
                  <p>GYM</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img5}
                  alt="Third slide"
                />

              <Carousel.Caption>
                  <p>BBQ Area</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img6}
                  alt="Third slide"
                />

<Carousel.Caption>
                  <p>BBQ Area</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img7}
                  alt="Third slide"
                />

<Carousel.Caption>
                  <p>Entrance ramp</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img8}
                  alt="Third slide"
                />

<Carousel.Caption>
                  <p>Business Center</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img9}
                  alt="Third slide"
                />

<Carousel.Caption>
                  <p>Business Center</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img10}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <p>Garage</p>
                </Carousel.Caption>
              </Carousel.Item>
         </Carousel>
      </div>
  )
};


export default Amenities;