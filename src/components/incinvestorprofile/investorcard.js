import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import Accordion from 'react-bootstrap/Accordion';
import { ImHistory } from "react-icons/im";
import { BsQuestionSquareFill } from "react-icons/bs";

 function Investorcard(props) {
  return (
    <div className='container-flex'>
    <Row>
        <Col sm={9}>
        <div className="vh-20">
      <MDBContainer>
        <MDBRow className="justify-content-start">
          <MDBCol md="9" sm="7" className="mt-4">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-2">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>{props.name}</MDBCardTitle>
                    <MDBCardText>{props.profession}</MDBCardText>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1">{props.countary}</p>
                        <p className="mb-0">{props.value1}</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">{props.earning}</p>
                        <p className="mb-0">{props.value2}</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">{props.ready}</p>
                        <p className="mb-0">{props.value3}</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <MDBBtn outline className="me-1 flex-grow-1 " style={{backgroundColor: "#317187", color: "white"}}>Chat</MDBBtn>
                      <MDBBtn className="flex-grow-1" style={{backgroundColor: "#efefef", color: "#317187"}}>Follow</MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
        </Col>
        <Col sm={3}>
        
        <Accordion className='mt-4'>
       
      <Accordion.Item eventKey="0">
        <Accordion.Header><ImHistory color="#17a2b8" size={40} />
        &nbsp; &nbsp; <h6>{props.accordianheading1} </h6></Accordion.Header>
        <Accordion.Body>
          {props.accordiantext1}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
        <BsQuestionSquareFill color="#17a2b8" size={30} />
        &nbsp; &nbsp; <h6>{props.accordianheading2}</h6></Accordion.Header>
        <Accordion.Body>
        {props.accordiantext2}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Col>
      </Row>
 
    </div>
  );
}


export default Investorcard;