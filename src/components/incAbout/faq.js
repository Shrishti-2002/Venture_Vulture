import React from "react";
import Sarthak from "../images/Sarthak_pic.jpg";
import Sitti from "../images/sitti_pic.jpeg";

import Dhruv from "../images/Dhruv_pic.jpeg";
function Faq() {
  return (
    

    <div class="container mt-4">
    <div class="row">
        <div class="col-md-4 col-sm-6">
            <div class="our-team">
                <img src={Sarthak}/>
                <div class="team-content">
                    <h2 style={{ color: "#ffffff" }}>Shrishti</h2>
                    <h6 style={{ color: "#ffffff" }}>Web Developer</h6>
                    
                </div>
            </div>
        </div>

        <div class="col-md-4 col-sm-6">
            <div class="our-team">
                <img src={Sarthak}/>
                <div class="team-content">
                    <h2 style={{ color: "#ffffff" }}>Shrishti Jain</h2>
                    <h6 style={{ color: "#ffffff" }}>Web Developer</h6>
                    
                </div>
            </div>
        </div>

        <div class="col-md-4 col-sm-6">
            <div class="our-team">
                <img src={Sarthak}/>
                <div class="team-content">
                    <h2 style={{ color: "#ffffff" }}>Shrishti</h2>
                    <h6 style={{ color: "#ffffff" }}>Web Developer</h6>
                   
                </div>
            </div>
        </div>


        
    </div>
</div>
  );
}

export default Faq;
