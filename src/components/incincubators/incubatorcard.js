import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { FaComments } from 'react-icons/fa';
import { BsFillStarFill } from "react-icons/bs";
import { BiMessageMinus } from "react-icons/bi";
import imageincubator from "../images/incubator.jpg";

 function Incubator() {
  return (
    <div className="vw-100" style={{ backgroundColor: '#eee'}}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px', backgroundImage: "radial-gradient(circle, rgba(66,217,188,1) 0%, rgba(23,162,184,1) 100%)" }}>
              <MDBCardBody className="p-4 text-black">
                <div>
                  <MDBTypography className="text-white" tag='h4'>Navya Mittal</MDBTypography>
                  <div className="d-flex align-items-center justify-content-between mb-3 text-white">
                    <h6 className="small mb-0 text-white">Incubator</h6>
                    <h6 className="fw-bold mb-0 text-white">Experience-10 years</h6>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '170px' }}
                      className="img-fluid rounded-circle border  border-3"
                      src={imageincubator}
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <div className="d-flex flex-row align-items-center mb-2">
                      <h5 className="mb-0 me-2 text-white mx-5">@navyamittal</h5>
                      <ul className="mb-0 list-unstyled d-flex flex-row" style={{ color: '#1B7B2C' }}>
                        <li>
                        <BsFillStarFill color="white" size={15} />
                        </li>
                        <li>
                        <BsFillStarFill color="white" size={15} />
                        </li>
                        <li>
                        <BsFillStarFill color="white" size={15} />
                        </li>
                        <li>
                        <BsFillStarFill color="white" size={15} />
                        </li>
                        <li>
                        <BsFillStarFill color="white" size={15} />
                        </li>
                      </ul>

                    </div>
                    <div>
                      <MDBBtn outline color="light" rounded size="lg"className="mx-1" ><h6>+ Follow</h6></MDBBtn>
                      <MDBBtn outline color="light" rounded size="lg" className="mx-1"><h6>See profile</h6></MDBBtn>
                      <MDBBtn outline color="light" floating size="sm" className="mx-1"><FaComments color="white" size={30} /></MDBBtn>
                    </div>
                  </div>
                </div>
                <hr />
                <MDBCardText ><h6>52 comments</h6></MDBCardText>
                <MDBBtn style={{background:"#317187", borderColor:"white", borderRadius: '10px'}}>
                <BiMessageMinus color="white" size={20} />&nbsp; Message
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
export default Incubator