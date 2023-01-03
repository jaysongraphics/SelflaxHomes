import React from 'react';
import img1 from '../images/3686fd5a-ae1a-4edd-a51d-0405b672887d.JPG'
import {Button, Card} from 'react-bootstrap';

function BookAStay (){
  return (
      <div className="book-a-stay">
          <h4>Book your Stay</h4>
          <h4>Reserva tu estadia</h4>
          <Card className="card-book">
            <Card.Img variant="top" src={img1}  alt="img-esperilla"  width="286" height="180" />
            <Card.Body>
              <Card.Title>La Esperilla</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text> */}
              <Button href="https://www.airbnb.com/h/selflaxhomes-esperilla" target="_blank" rel="noreferrer" className="btn btn-dark" variant="primary">Book | Reserva</Button>
              <Button id="guidebook" href="https://www.airbnb.com/s/guidebooks?refinement_paths[]=/guidebooks/4275403" target="_blank" rel="noreferrer" className="btn btn-dark" variant="primary">guidebook | guía</Button>

            </Card.Body>
          </Card>
      </div>
  )
};


export default BookAStay;