import React from "react";
import logo from "../assets/logo.svg";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-light fixed-top">
      <div className="container-fluid">
        <img className="logo" src={logo} alt="tesla logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Model S
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Model 3
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Model X
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Model Y
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Solar Roof
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Solar Panels
              </a>
            </li>
          </ul>

          <ul className="navbar-nav nav2">
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Tesla Account
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
