import React from "react";
import { Link } from "react-router-dom";

const GuestNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand me-2" href="/">
            <h2>Iffu</h2>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <Link to={"/login"}>
                <button type="button" className="btn btn-primary me-3">
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                <button type="button" className="btn btn-primary me-3">
                  Sign up for free
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default GuestNav;
