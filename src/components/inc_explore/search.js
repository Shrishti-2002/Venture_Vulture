import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdPersonSearch } from "react-icons/md";
import { FaFemale } from "react-icons/fa";
import { FaFistRaised } from "react-icons/fa";
import { GrNewWindow } from "react-icons/gr";
import { GoIssueClosed } from "react-icons/go";


function Search() {
  return (

<div className="container">
      <div class="row">
        <div class="col-8">
          <h4 className=" mt-4 mr-4">
          <BiSearchAlt2 color="#17a2b8"  size={30}/> &nbsp;Invest in founders building the future</h4>
        </div>
        <div class="col-4">
          <nav className="navbar navbar mt-4 mr-4 justify-content-end">
            <form className="form-inline">
            
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </nav>
        </div>
      </div>

      <ul class="nav nav-tabs">
        <li class="nav-item">
        <Link to="/contact" className="nav-link active">
         <h6 className="classtext"><MdPersonSearch color="#000000"  size={30}/> Popular searches </h6>
            </Link>
        </li>


        <li class="nav-item">
        <Link to="/contact" className="nav-link active">
         <h6 className="classtext"><FaFemale color="#000000"  size={30}/>Female founders </h6>
            </Link>
        </li>
        

        <li class="nav-item">
        <Link to="/contact" className="nav-link active">
         <h6 className="classtext"><FaFistRaised color="#000000"  size={27}/> Most Raised </h6>
            </Link>
        </li>

        
        <li class="nav-item">
        <Link to="/contact" className="nav-link active">
         <h6 className="classtext"><GrNewWindow color="#000000"  size={25}/> New this week </h6>
            </Link>
        </li>

        <li class="nav-item">
        <Link to="/contact" className="nav-link active">
         <h6 className="classtext"><GoIssueClosed color="#000000"  size={25}/> Closing soon </h6>
            </Link>
        </li>
        
      </ul>
    </div>
    );
}

export default Search;

    