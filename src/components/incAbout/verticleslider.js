import React,{useState} from "react";
import { Link } from "react-router-dom";

function Verticleslider() {
  const [activepage,setActivepage] = useState('home');
  return (
    <div className="container mt-4">
    <h4> &nbsp; &nbsp; &nbsp;&nbsp;FAQs</h4>
      <div className="row">
        <div className="col-3">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
           
           <div
              className={`nav-link ${activepage=='home' ? "active" : ''}text-secondary `}
              id="v-pills-profile-tab"
              data-toggle="pill"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
              onClick={() => setActivepage('home')}
            >
              Problems addressed 
            </div>

            <div
              className={`nav-link ${activepage=='profile' ? "active" : ''}text-secondary `}
              id="v-pills-profile-tab"
              data-toggle="pill"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
              onClick={() => setActivepage('profile')}
            >
              Platform Functions
            </div>
            <div
              className={`nav-link ${activepage=='messages' ? "active" : ''}text-secondary`}
              id="v-pills-messages-tab"
              data-toggle="pill"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
              onClick={() => setActivepage('messages')}
            >
              Quality Maintenance
            </div>
            <div
              className={`nav-link ${activepage=='settings' ? "active" : ''}text-secondary`}
              id="v-pills-settings-tab"
              data-toggle="pill"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
              onClick={() => setActivepage('settings')}
            >
              Security and vision
            </div>
          </div>
        </div>
        <div className="col-9">
          
            {activepage=='home' ? <div
              className={`tab-pane fade ${activepage=='home' ? "show active" : ''}text-secondary`}
              id="v-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <h5>Q- What is the problem it tries to address?</h5>
              It tries to address the following problems in Indian market:
              <ol type="I">
                <li>
                  Market exposure of potential investors is less and unhealthy
                  hence many startups fail to get adequate investment and
                  complete even 5 years.
                </li>
                <li>
                  There is a high number of novice entrepreneurs who need
                  assistance in terms of investment, mentorship, workforce, etc.
                </li>
                <li>
                  Platforms like Linkedin do not cater to the needs of startups
                  and new brands particularly as it is more generalized and less
                  specific
                </li>
              </ol>
            </div> : ''}

            {activepage=='profile' ? <div
              className={`tab-pane fade ${activepage=='profile' ? "show active" : ''}`}
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <h5>Q- What does it do?</h5>
              We at Venture Pins welcome startups at all stages providing
              different exposure to each . We provide a platform to gain
              mentorship as well as investment to the startups that are at the
              ideation stage to provide a platform for investment, guidance, and
              scaling to startups that are at different stages of
              validation,early traction and scaling.
            </div> : ''}
            {activepage==='messages' ? <div
              className={`tab-pane fade ${activepage=='messages' ? "show active" : ''}`}
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              <h5>Q-How it maintains quality on platform?</h5>
              We promote quality startups and businesses by Quarterly
              elimination of businesses and investors to maintain quality and
              declutter the platform.
            </div> : ''}
            {activepage==='settings' ? <div
              className={`tab-pane fade ${activepage=='settings' ? "show active" : ''}`}
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              <h5>Q-How it provides security?</h5>
              It provides an exchange window for chatting which contains
              encrypte information.

              <h5>Q-What is the vision of Veturepin?</h5>
              The improvement in branding experience of early traction
              entrepreneurs and inflation in revenue structure will go hand in
              hand.
            </div> : ''}
          </div>
        </div>
      </div>
    
  );
}

export default Verticleslider;
