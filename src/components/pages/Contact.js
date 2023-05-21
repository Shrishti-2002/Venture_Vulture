import React from "react";
import Investor from "./Investor";
import Working from "../incregister/working";
import Startup from "./Startup";
import Choose from "../incregister/choose";



function Contactus() {
  return (
    <div className="container">
    <Choose/>
      <Working />
      <Investor />
      <Startup />
    </div>
  );
}

export default Contactus;
