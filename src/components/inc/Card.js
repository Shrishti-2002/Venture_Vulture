import React from "react";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbZoomMoney } from "react-icons/tb";
import { GiIncubator } from "react-icons/gi";
import { BsPersonPlusFill } from "react-icons/bs";
import { GiCrystalGrowth } from "react-icons/gi";
import { BsPersonFillUp } from "react-icons/bs";


function Card() {
  return (
    <div className="outer justify-content-center">
      <div  className="card-group homepg justify-content-center">
        <div style={{ backgroundImage: "radial-gradient(circle, rgba(66,217,188,1) 0%, rgba(23,162,184,1) 100%)"}} className="card inner border border-light shadow p-3 mb-5 bg-white rounded">
        <div className="card-body inner-text d-flex-column align-items-center justify-content-center ">
            <div><h1 className="card-title text-white justify-content-center">
            140 Mn+</h1></div>
            <div><h3 className="card-subtitle mb-2 text-white">&nbsp;Funds Raised</h3><br/></div>
          </div>
          <GiTakeMyMoney color="#FFFFFF" size={40} />
        </div>
        <div className="card inner shadow p-3 mb-5 bg-white rounded border border-light">
        <div className="card-body inner-text d-flex flex-column align-items-center justify-content-center ">
            <h1 className="card-title">950+</h1>
            <h3 className="card-subtitle mb-2 text-muted">&nbsp;Investments</h3><br/>
          </div>
          <TbZoomMoney color="#17a2b8" size={40} />
        </div>
        <div style={{ backgroundImage: "radial-gradient(circle, rgba(66,217,188,1) 0%, rgba(23,162,184,1) 100%)"}}className="card inner shadow p-3 mb-5 bg-white rounded border border-light">
        <div className="card-body inner-text d-flex-column align-items-center justify-content-center ">
            <h1 className="card-title text-white">18797+</h1>
            <h3 className="card-subtitle mb-2 text-white">&nbsp;Investors</h3><br/>
          </div>
          <BsPersonPlusFill color="#ffffff" size={40} />
        </div>
      </div>

      <div className="card-group homepg">
        <div className="card inner shadow p-3 mb-5 bg-white rounded border border-light">
        <div className="justify-content-center">
          <div className="card-body inner-text d-flex-column align-items-center justify-content-center">
            <h1 className="card-title">34432+</h1>
            <h3 className="card-subtitle mb-2 text-muted">&nbsp;Startups</h3><br/>
            </div>
            <GiCrystalGrowth color="#17a2b8" size={40} />
          </div>
        </div>
        <div style={{ backgroundImage: "radial-gradient(circle, rgba(66,217,188,1) 0%, rgba(23,162,184,1) 100%)"}} className="card inner shadow p-3 mb-5 bg-white rounded border border-light text-center">
          <div className="card-body inner-text d-flex-column align-items-center justify-content-center">
            <h1 className="card-title text-white">950+</h1>
            <h3 className="card-subtitle mb-2 text-white" >&nbsp;Accelerators</h3>
          </div>
          <BsPersonFillUp color="#ffffff" size={40} />
        </div>
        <div className="card inner shadow p-3 mb-5 bg-white rounded border border-light">
        <div className="card-body inner-text d-flex-column align-items-center justify-content-center ">
            <h1 className="card-title">18797+</h1>
            <h3 className="card-subtitle mb-2 text-muted">&nbsp;Incubators</h3><br/>
          </div>
          <GiIncubator color="#17a2b8" size={40} />
        </div>
      </div>
    </div>
  );
}

export default Card;
