import React from "react";
import {BiRightArrowCircle } from "react-icons/bi";
import Slider1 from "../images/company2.jpg";
import Slider3 from "../images/company.jpg";
import Slider4 from "../images/company3.jpg";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Popular(props) {
  return (
    <div className="container mt-4">
    <h3 className="text-center mt-4 ">{props.title} &nbsp;
    <div style={{display: "flex", justifyContent: "right"}}>
    <BiRightArrowCircle color="#17a2b8" size={30}/>
    </div>
    </h3>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={Slider4} />
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
            <Card.Img variant="top" src={Slider3} />
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

export default Popular;
