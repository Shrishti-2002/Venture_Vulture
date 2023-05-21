import imageabout from "../images/abt.png";
import imageabout2 from "../images/project1-pic3.jpg";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Abtimg() {
  return (
<container>
    <Row>
        <Col sm={7}>
        <div className="container-flex"
    style={{ backgroundImage: `url(${imageabout})`,backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '60vw',
        height: '60vh'}}
  ></div> 
        </Col>
        <Col sm={5}>

        <div className="container-flex"
    style={{ backgroundImage: `url(${imageabout2})`,backgroundPosition: 'left',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '35vw',
        height: '45vh'}}
  ></div> <h6 className="text-center mt-4">Invest as little as $100 in the startups and small businesses you believe in.
  Together, we’ve helped thousands of founders shoot their shot. Join us in this journey.</h6> 
        </Col>
      </Row>
   
   
   </container>
  );
}

export default Abtimg;
