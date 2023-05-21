import React from "react";
import Description from "../incAbout/description";
import Faq from "../incAbout/faq";
import Slider from "../inc/Slider";
import VerticalSlider from "../incAbout/verticleslider";
import Abtimg from "../incAbout/abtimage";


function Aboutus() {
  return (

    <div className="about">
    
     <Slider />
     <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-centre">
              <h3 style={{ color: "#579bb1" }}><h3 style={{ color: "#000000" }}> India's top early stage
                platform for</h3> Startup Investing!<br/>
              </h3>
              <Description />
              
              <div className="underline mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
      <Abtimg/>
      <VerticalSlider/>
      <Faq />
    </div>
  );
}

export default Aboutus;
