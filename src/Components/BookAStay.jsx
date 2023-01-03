import React from 'react';
import img1 from '../images/3686fd5a-ae1a-4edd-a51d-0405b672887d.JPG'
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import {Button, Card} from 'react-bootstrap';

function BookAStay (){
  return (
      <div>
          <h1>Book your Stay</h1>
          {/* <a href="https://www.airbnb.com/h/selflaxhomes-esperilla" target="_blank" rel="noreferrer">
            <button>La Esperilla</button>
          </a> */}
          {/* <div className="card">
            <img src={img1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">La Esperilla</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://www.airbnb.com/h/selflaxhomes-esperilla" target="_blank" rel="noreferrer" className="btn btn-dark">Go somewhere</a>
            </div>
          </div> */}
          {/* <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">La Julia</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://www.airbnb.com/h/selflaxhomes-esperilla" target="_blank" rel="noreferrer" className="btn btn-primary">Go somewhere</a>
            </div>
          </div> */}
          <Card className="card-book">
            <Card.Img variant="top" src={img1}  alt="img-esperilla"  width="286" height="180" />
            <Card.Body>
              <Card.Title>La Esperilla</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text> */}
              <Button href="https://www.airbnb.com/h/selflaxhomes-esperilla" target="_blank" rel="noreferrer" className="btn btn-dark" variant="primary">Book</Button>
            </Card.Body>
          </Card>
          
      </div>
  )
};


export default BookAStay;