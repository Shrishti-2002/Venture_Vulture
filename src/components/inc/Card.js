import React from "react";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbZoomMoney } from "react-icons/tb";
import { GiIncubator } from "react-icons/gi";
import { BsPersonPlusFill } from "react-icons/bs";
import { GiCrystalGrowth } from "react-icons/gi";
import { BsPersonFillUp } from "react-icons/bs";


function Card() {
  return (
    <div className="outer">
      <div  className="card-group homepg">
        <div style={{ backgroundImage: "radial-gradient(circle, rgba(66,217,188,1) 0%, rgba(23,162,184,1) 100%)"}} className="card inner border border-light shadow p-3 mb-5 bg-white rounded">
          <div className="card-body inner-text">
            <h1 className="card-title text-white">
            $140+Mn</h1>
            <h3 className="card-subtitle mb-2 text-white">Funds Raised</h3><br/>
            <GiTakeMyMoney color="#FFFFFF" size={50} />
          </div>
        </div>
        <div className="card inner shadow p-3 mb-5 bg-white rounded border border-light">
          <div className="card-body inner-text">
            <h1 className="card-title">950+</h1>
            <h3 className="card-subtitle mb-2 text-muted">Investments</h3><br/>
            <TbZoomMoney color="#17a2b8" size={50} />
          </div>
        </div>
        <div style={{ backgroundImage: "radial-gradient(circle, rgba(66,217,188,1) 0%, rgba(23,162,184,1) 100%)"}}className="card inner shadow p-3 mb-5 bg-white rounded border border-light">
          <div className="card-body inner-text">
            <h1 className="card-title text-white">18797</h1>
            <h3 className="card-subtitle mb-2 text-white">Investors</h3><br/>
            <BsPersonPlusFill color="#ffffff" size={50} />
          </div>
        </div>
      </div>

      <div className="card-group homepg">
        <div className="card inner shadow p-3 mb-5 bg-white rounded border border-light">
          <div className="card-body inner-text">
            <h1 className="card-title">34432</h1>
            <h3 className="card-subtitle mb-2 text-muted">Startups</h3><br/>
            <GiCrystalGrowth color="#17a2b8" size={50} />
          </div>
        </div>
        <div style={{ backgroundImage: "radial-gradient(circle, rgba(66,217,188,1) 0%, rgba(23,162,184,1) 100%)"}} className="card inner shadow p-3 mb-5 bg-white rounded border border-light">
          <div className="card-body inner-text">
            <h1 className="card-title text-white">950+</h1>
            <h3 className="card-subtitle mb-2 text-white">Accelerators</h3><br/>
            <BsPersonFillUp color="#ffffff" size={50} />
          </div>
        </div>
        <div className="card inner shadow p-3 mb-5 bg-white rounded border border-light">
          <div className="card-body inner-text">
            <h1 className="card-title">18797</h1>
            <h3 className="card-subtitle mb-2 text-muted">Incubators</h3><br/>
            <GiIncubator color="#17a2b8" size={50} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
