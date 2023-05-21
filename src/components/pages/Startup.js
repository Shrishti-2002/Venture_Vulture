import React from "react";

function Startup() {
  return (
    <div className="container form">
      <h2>Are you a startup?</h2>
      <h6 className="heading">Let's get started! Please fill Your personal details</h6>
      <form>
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
                  />
                </div>
              </div>
              <div className="col-sm">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="State"
                  />
                </div>
              </div>

              <div className="col">
                <div className="col-sm">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="pincode"
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
            />
          </div>
        </form>
        <form>
          <div className="container">
            <br />
            <label className="sr-only" for="inlineFormInput">
              Are you a single founder?
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
        </form>
        <br />
        <h6 className="heading">Please fill Startup details</h6>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">
            <br />
            Describe about Company
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <br />
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
        </form>
        <div class="container">
          <div class="row">
            <div class="col">
              <div className="form-row align-items-center">
                <div className="col-auto my-1">
                  <div className="col-auto">
                    <br />
                    <label className="sr-only" for="inlineFormInputGroup">
                      Registered name of startup
                    </label>
                    <div className="input-group mb-2">
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroup"
                        placeholder="Enter registered name of your startup"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <br />

              <div class="form-group">
                <label for="exampleFormControlInput1">Website URL</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter website URL"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <div className="form-row align-items-center">
                <div className="col-auto my-1">
                  <div className="col-auto">
                    <br />
                    <form class="form-inline">
                      <label class="my-1 mr-2" for="inlineFormCustomSelectPref">
                        Select stage of startup{" "}
                      </label>
                      <br />
                      <select
                        class="custom-select my-1 mr-sm-2"
                        id="inlineFormCustomSelectPref"
                      >
                        <option selected>
                          Select stage
                          <br />
                        </option>
                        <option value="1">Idea stage</option>
                        <option value="2">Proof of concept</option>
                        <option value="3">Beta Launched</option>
                        <option value="3">Early Traction</option>
                        <option value="3">Steady Revenues</option>
                      </select>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <br />

              <div class="form-group">
                <label for="exampleFormControlInput1">City of operation</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter City of operation"
                />
              </div>
              <br />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <div className="form-row align-items-center">
                <div className="col-auto my-1">
                  <label
                    className="mr-sm-2 sr-only"
                    for="inlineFormCustomSelect"
                  >
                    <br />
                    Sector of startup
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
                    <option value="3">Healthcare </option>
                    <option value="3">Construction</option>
                    <option value="3">Textile</option>
                  </select>
                </div>
              </div>

              <br />
            </div>
            <div class="col">
              <br />
              <form action="/action_page.php">
                <label for="birthday">Month and year of inception</label>
                <br />
                <input type="date" id="birthday" name="birthday" />
              </form>
            </div>
          </div>
        </div>

        <br />

        <div className="mb-3">
          <label for="formFileMultiple" class="form-label">
            Drop ypur pitch deck here to upload (pdf file only).
          </label>
          <input
            className="form-control"
            type="file"
            id="formFileMultiple"
            multiple
          />
        </div>
        <div className="form-group form-check">
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
        <button type="button" className="btn btn-default text-white mt-4">
          Submit & sign Up
        </button>
      </form>
    </div>
  );
}

export default Startup;
