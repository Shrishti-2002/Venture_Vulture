import Incubator from "../incincubators/incubatorcard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Investorprofile() {
  return (
    <Container>
      
      <Row>
        <Col><Incubator/></Col>
        <Col><Incubator/></Col>
        <Col><Incubator/></Col>
      </Row>
    </Container>
    
    );
  }
  
  export default Investorprofile;