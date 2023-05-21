import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className='container-fluid'>
      <Link to="/" className="navbar-brand">
        Venturepin
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav mr-auto">

          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About us
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/explore" className="nav-link">
              Explore
            </Link>
          </li>

          <li className="nav-item active">
            <Link to="/contact" className="nav-link">
              Register
            </Link>
          </li>

          <li className="nav-item active">
            <Link to="/myprofile" className="nav-link">
              My-profile
            </Link>
          </li>

          <li className="nav-item active">
            <Link to="/investors_profile" className="nav-link">
              Investors
            </Link>
          </li>

          <li className="nav-item active">
            <Link to="/incubators" className="nav-link">
              Incubators
            </Link>
          </li>

        </ul>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
