import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { SiGooglescholar } from "react-icons/si";
import { MdWork } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { MdLanguage } from "react-icons/md";
import { MdAddAPhoto } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { BsFillStarFill } from "react-icons/bs";

import img from "../images/img.jpg";

function Sidebar() {
  return (
    <div className="container-flex">
      <div className="row no-gutters">
        <div className="col-6 col-md-4 ">
          <div className="card sidebar">
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title text-center">Person name</h5>
              <p className="card-text text-center">
                <i>
                  {" "}
                  <HiLocationMarker color="#17a2b8" /> &nbsp; India, Delhi{" "}
                </i>
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Main page</li>
              <li className="list-group-item">
                <BsFillPersonFill color="#17a2b8" />
                &nbsp; &nbsp; Information
              </li>
              <li className="list-group-item">
                <SiGooglescholar color="#17a2b8" />
                &nbsp;&nbsp; Education
              </li>
              <li className="list-group-item">
                <MdWork color="#17a2b8" />
                &nbsp;&nbsp; Experience
              </li>
              <li className="list-group-item">
                <FaMoneyCheckAlt color="#17a2b8" />
                &nbsp;&nbsp; Expectations
              </li>
              <li className="list-group-item">
                <GiSkills color="#17a2b8" />
                &nbsp;&nbsp; Skills
              </li>
            </ul>
          </div>

          <h5 class="prog">Profile completed</h5>

          <div class="progress prog">
            <div
              class="progress-bar btn-default"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="80"
            ></div>
          </div>
          <h6 className="prog">Boost your profile by suggested below :</h6>
          <ol type="1">
            <li>
              <MdAddAPhoto color="#17a2b8" /> Add Profile Photo
            </li>
            <br />
            <li>
              {" "}
              <MdLanguage color="#17a2b8" /> Add Language
            </li>
            <br />
            <li>
              {" "}
              <HiLocationMarker color="#17a2b8" /> Add Current Location
            </li>
            <br />
          </ol>
        </div>

        <div className="col-12 col-sm-6 col-md-8">
          <div className="container-flex jobs">
            <nav className="navbar navbar-light bg-light">
              <div className="row">
                <form className="form-inline">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search for related job "
                    aria-label="Search"
                  />
                </form>
              </div>
            </nav>

            <div class="card">
              <div className="card-body">
                <h5 className="text-center">Matched job offers</h5>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Business Management</h5>
                        <p className="card-text">
                          operational plans, carrying out performance
                          evaluations..
                        </p>
                        <a href="#" className="btn btn-outline btn-default">
                          Apply now <BsFillArrowRightSquareFill />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Finance management</h5>
                        <p className="card-text">
                        financial health of an organization and help ensure its viability..
                        </p>
                        <a href="#" className="btn btn-outline btn-default">
                          Apply now <BsFillArrowRightSquareFill />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">General Manager Sales</h5>
                        <p className="card-text">
                        managing staff, budget, employing marketing strategies..
                        </p>
                        <a href="#" className="btn btn-outline btn-default">
                          Apply now <BsFillArrowRightSquareFill />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Shift Manager</h5>
                        <p className="card-text">
                        oversees operations when the General Manager...
                        </p>
                        <a href="#" className="btn btn-outline btn-default">
                          Apply now <BsFillArrowRightSquareFill />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button btn-default" class="btn btn-secondary btn-lg btn btn-default">
                <BsFillArrowDownSquareFill color="white" /> &nbsp;{" "}
                <h6 className="load "> Load more</h6>
              </button>
            </div>
          </div>

          <div className="container-flex courses">
            <div className="card text-center">
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      All level
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">
                      Premium
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  {" "}
                  <IoIosSchool color="#17a2b8" />
                  &nbsp;Courses you can take
                </h5>
                <p className="card-text">
                  Based on your profile and preferences, following cources has
                  been suggested to you
                </p>
                <a href="#" className="btn btn-outline btn-default">
                  View courses
                </a>
              </div>
            </div>
          </div>
          <div className="container star align-centre">
            <h6>Improve your skills to earn badges</h6>
            <BsFillStarFill color="#17a2b8" size={50} />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <BsFillStarFill color="#17a2b8" size={50} />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <BsFillStarFill color="#17a2b8" size={50} />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <BsFillStarFill size={50} />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <BsFillStarFill size={50} />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
