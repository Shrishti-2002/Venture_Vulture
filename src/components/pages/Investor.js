import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'
function Investor() {
  const navigate =useNavigate();

  const [user,setUser]=useState({
    name: "",
    username:"",
    email:  "",
    password:"",
    city:"",
    state:"",
    pincode:"",
    linkedinID:"",
    description:"",
  });
  let name ,value;
  const handleInput=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});
  }
  let postData=async(e)=>{
    e.preventDefault();
    const {name,username,email,password,city,state,pincode,linkedinID,description}=user;
    const res=await fetch("/register",{
      method:'POST',
      headers:{
        'Content-Type':"application/json",

      },
      body:JSON.stringify({
        name,username,email,password,city,state,pincode,linkedinID,description
      })
    });
    const data=await res.json();
    if(data.status===422 || !data){
      console.log("reg not successful")
    }
    else{
      navigate("/login");
    }
  }

  return (
    <div className="container form">
      <h2>Are you an Investor?</h2>
      <h6 className="heading">
      Let's get started! To begin your journey we request you to fill the form which should take
        around 2-3 minutes to complete.
      </h6>
      <form method="post">
        <br />
        <div className="row">
          <div className="col-6">
            <div className="form-row align-items-center">
              <div className="col-auto">
                <label className="sr-only" for="inlineFormInput">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="inlineFormInput"
                  placeholder="Jane Doe"
                  name="name"
                  value={user.name}
                  onChange={handleInput}
                />
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="col-auto">
              <label className="sr-only" for="inlineFormInputGroup">
                Username
              </label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">@</div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroup"
                  placeholder="Username"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="autoSizingCheck"
                
              />

              <label className="form-check-label" for="autoSizingCheck">
                Remember me
              </label>
            </div>
          </div>
        </div>
      </form>
      <form>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
                onChange={handleInput}
                value={user.email}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
          </div>

          <div className="col-6">
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleInput}
              />
            </div>
          </div>
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <div className="container">
          <br />
          <label className="sr-only" for="inlineFormInput">
            Select Gender
          </label>
          <div className="row">
            <div className="col-sm">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  checked
                />
                <label className="form-check-label" for="exampleRadios1">
                  Male
                </label>
              </div>
            </div>
            <div className="col-sm">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                />
                <label className="form-check-label" for="exampleRadios2">
                  Female
                </label>
              </div>
            </div>
            <div className="col-sm">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                  value="option3"
                />
                <label className="form-check-label" for="exampleRadios3">
                  Others
                </label>
              </div>
            </div>
          </div>
        </div>
        <form>
          <label className="sr-only" for="inlineFormInput">
            <br />
            Address
          </label>
          <div className="form-row">
            <div className="row">
              <div className="col-sm">
                <div className="col-7">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    value={user.city}
                    name="city"
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="col-sm">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="State"
                    name="state"
                    value={user.state}
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="col">
                <div className="col-sm">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="pincode"
                    name="pincode"
                    value={user.pincode}
                    onChange={handleInput}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
        <form>
          <div className="input-group mt-4">
            <div className="input-group-prepend">
              <span className="input-group-text">Phone number</span>
            </div>
            <input
              type="text"
              aria-label="First name"
              className="form-control"
            />
            <input
              type="text"
              aria-label="Last name"
              className="form-control"
            />
          </div>
          <label for="basic-url">
            <br />
            LinkedIn URL
            <br />
          </label>
          <div className="input-group mb-3">
            <div className="input-group-prepend"></div>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              name="linkedinID"
              value={user.linkedinID}
              onChange={handleInput}

            />
          </div>
          <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">
            Which of the following best describe you
          </label>
          <div class="input-group mb-3">
            <select class="custom-select" id="inputGroupSelect02">
              <option selected>Select your profile</option>
              <option value="1">Professional</option>
              <option value="2">VC and PE professional</option>
              <option value="3">VC and PE funds</option>
              <option value="3">Corporate Instituition</option>
              <option value="3">Family office</option>
              <option value="3">Startup Founder</option>
              <option value="3">Accelerator / Incubators</option>
              <option value="3">Others</option>
            </select>
          </div>
        </form>
        <form>
          <div className="container">
            <br />
            <label className="sr-only" for="inlineFormInput">
              Do you have assets worth over INR 2 cr apart from your primary
              residence?
            </label>
            <div className="row">
              <div className="col-sm">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label className="form-check-label" for="exampleRadios1">
                    Yes
                  </label>
                </div>
              </div>
              <div className="col-sm">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="form-row align-items-center">
            <div className="col-auto my-1">
              <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">
                <br />
                Sector preference for investment
              </label>
              <br />
              <select
                className="custom-select mr-sm-2"
                id="inlineFormCustomSelect"
              >
                <option selected>Select...</option>
                <option value="1">Fintech</option>
                <option value="2">E-Commerce</option>
                <option value="3">Edtech </option>
                <option value="4">Healthcare </option>
                <option value="5">Construction</option>
                <option value="6">Textile</option>
              </select>
            </div>
            <div className="col-auto my-1">
              <div className="custom-control custom-checkbox mr-sm-2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customControlAutosizing"
                />
                <label
                  className="custom-control-label"
                  for="customControlAutosizing"
                >
                  Remember my preference
                </label>
              </div>
            </div>
          </div>
        </form>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">
            <br />
            Describe about you
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="description"
            value={user.description}
            onChange={handleInput}
          ></textarea>
        </div>
        <br />
        Help us understand your experience better (multiple options can be
        selected)*
        <br />
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            You have invested in startups before
          </label>
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            You come from an entrepreneurial family or have been a
            founder/co-founder of a business venture family
          </label>
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            You have at least 10 years of work experience
          </label>
        </div>
        <div className="form-group form-check mt-4">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label " for="exampleCheck1">
            I certify that all the information provided by me is accurate and I
            am willing to provide evidence for the same for KYC purposes when
            requested.
          </label>
        </div>
        <button type="button btn-default" className="btn btn-default text-white mt-4" onClick={postData}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Investor;
