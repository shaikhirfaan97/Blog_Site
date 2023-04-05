import React from "react";
import { Link } from "react-router-dom";

const GuestNav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand me-2" href="/">
            <h2>Iffu</h2>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarButtonsExample">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
            </ul>

            <div class="d-flex align-items-center">
              <Link to={"/login"}>
                <button type="button" class="btn btn-primary me-3">
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                <button type="button" class="btn btn-primary me-3">
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
