
import React from 'react';
import companyimg from "../images/companyimage.png";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

function Company() {
  return (
         
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5 mt-4">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3">
              <MDBBreadcrumbItem>
                <h6>About company</h6>
              </MDBBreadcrumbItem>
              
              <MDBBreadcrumbItem active>Company Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={companyimg}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <h6 className="text-muted mb-2 mt-2">Wefunder</h6>
                <p className="text-muted mb-4">Bay Area, San Francisco</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn style={{backgroundColor: "#317187", color: "white"}}>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1" style={{backgroundColor: "#efefef", color: "#317187"}}>Connect</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText><h6>Partners with:</h6>
                    Online systemlogistics & CTL Cargo</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText><h6>Line of business:</h6>
                    National and international logistics</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                    <MDBCardText><h6>Company Foundation:</h6>
                   -In 2003, At Zwikau, San Fransisco</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                    <MDBCardText><h6>Management:</h6>
                   -In 2003, At Zwikau, San Fransisco</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText><h6>Service:</h6>
                   Logistics(all operations at all level)</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText><h6>Company Name </h6></MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted"><h6>Wefunder</h6></MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText><h6>Contact us at</h6></MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted"><h6>wefunder@gmail.com -- (097) 234-5678</h6></MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText><h6>Branches</h6></MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted"><h6>D-54427 kal am see<br/>D-54333 kal am see</h6></MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText><h6>Managed area</h6></MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted"><h6>105.000 sq m</h6></MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText><h6>Staff</h6></MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted"><h6>400 employees</h6> including freelancers and auxilaries</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-dark font-italic me-1"></span> <h5> Our strengths </h5></MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Work culture</MDBCardText>
                    <MDBProgress className="progress-bar btn-default"
              role="progressbar"
              style={{ width: "90%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="80">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Customer satisfaction</MDBCardText>
                    <MDBProgress className="progress-bar btn-default"
              role="progressbar"
              style={{ width: "60%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="80">

    
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>


                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Management</MDBCardText>
                    <MDBProgress className="progress-bar btn-default"
              role="progressbar"
              style={{ width: "60%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="80">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Investment potential</MDBCardText>
                    <MDBProgress className="progress-bar btn-default"
              role="progressbar"
              style={{ width: "100%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="80">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Risk factor</MDBCardText>
                    <MDBProgress className="progress-bar btn-default"
              role="progressbar"
              style={{ width: "30%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="80">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Sustainability</MDBCardText>
                    <MDBProgress className="progress-bar btn-default"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="80">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-dark font-italic me-1"></span><h5>Indicatives</h5> </MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Business results</MDBCardText>
                    <MDBProgress className="progress-bar btn-default"
              role="progressbar"
              style={{ width: "95%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="80">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Uniqueness</MDBCardText>
                    <MDBProgress className="progress-bar btn-default"
              role="progressbar"
              style={{ width: "70%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="80">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Feasibility of product</MDBCardText>
                    <MDBProgress className="progress-bar btn-default"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="80">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Service standards</MDBCardText>
                    <MDBProgress className="progress-bar btn-default"
              role="progressbar"
              style={{ width: "90%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="80">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Operational improvements</MDBCardText>
                    <MDBProgress className="progress-bar btn-default"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="80">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Actionability</MDBCardText>
                    <MDBProgress className="progress-bar btn-default"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="80">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
export default Company;