import React from "react";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { Link } from "react-router-dom";

function Choose() {
  return (

<div className="outer">
      <div className="card-group homepg">
        <div className="card inner border border-white shadow p-3 mb-5 bg-light rounded">
          <div className="card-body inner-text">
            <h1 className="card-title">
            <Link to="/investor" className="nav-link">
            Are you an Investor?
            </Link>
           </h1><br/>
            <GiPayMoney color="#17a2b8" size={50} />
            
          </div>
        </div>
        <div className="card inner shadow p-3 mb-5 bg-light rounded border border-white">
          <div className="card-body inner-text">
            <h1 className="card-title">
            <Link to="/startup" className="nav-link">
            Are you a Startup?
            </Link> </h1><br/>
            <GiReceiveMoney color="#17a2b8" size={50} />
            
          </div>
        </div>
       
      </div>
      </div>
       );
}

export default Choose;

