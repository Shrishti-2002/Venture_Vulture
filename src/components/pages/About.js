import React from "react";
import Description from "../incAbout/description";
import Faq from "../incAbout/faq";
import Slider from "../inc/Slider";
import VerticalSlider from "../incAbout/verticleslider";
import Abtimg from "../incAbout/abtimage";
import Listgrp from '../inc/Listgrp';

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
      {/* <Faq /> */}
      <Listgrp 
        subheading1="1. It's much riskier"
        subheading2="2. Win big or lose all"
        subheading3="3. Hold for the long term"
        text1="Never invest more than you can afford to lose. Startups are hard. Even the best founders fail."
        text2="Startups win big or go bankrupt. Consider investing in them more like socially-good lottery tickets."
        text3="When it works, it takes a long time to earn a return. Expect to hold for years."
      />
      <Listgrp 
        subheading1="4. Build the future"
        subheading2="5. There are often perks"
        subheading3="6. Hold for the long term"
        text1="Your money goes to the company to help create jobs, build products, and grow companies."
        text2="Investors often get perks like VIP access to new products or discounts."
        text3="You can offer more than money. The best angel investors help the companies they invest in to succeed."
      />
      
    </div>
  );
}

export default Aboutus;
