import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Sarthak from "../images/Sarthak_pic.jpg";
import Dhruv from "../images/Dhruv_pic.jpeg";
import Slider1 from "../images/10.png";
import {BiRightArrowCircle } from "react-icons/bi";

function Testimonials(props) {
  return (
    <div className="container mt-4">
    <h3 className="text-center">What people say!
    <div style={{display: "flex", justifyContent: "right"}}><BiRightArrowCircle color="#17a2b8" size={30}/>&nbsp;</div></h3>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={Slider1} />
            <Card.Body>
              <Card.Title>{props.cardtitle}</Card.Title>
              <Card.Text>
              {props.cardbody}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{props.cardfooter}</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={Slider1} />
            <Card.Body>
              <Card.Title>{props.cardtitle}</Card.Title>
              <Card.Text>
              {props.cardbody}{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{props.cardfooter}</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={Slider1}/>
            <Card.Body>
              <Card.Title>{props.cardtitle}</Card.Title>
              <Card.Text>
              {props.cardbody}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{props.cardfooter}</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        </div>
    
  );
}

export default Testimonials;



// I'm honoured to have assisted this on its path to going
//                       public, and I couldn't be happier with how my investment
//                       has done so far! How is this platform different? It
//                       doesn’t go for volume. It go for higher quality deals.
