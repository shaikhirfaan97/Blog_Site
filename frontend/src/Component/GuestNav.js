import React from "react";
import { Link } from "react-router-dom";
const GuestNav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand me-2" href="https://mdbgo.com/">
          <h2>Iffu</h2>{
            /* <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="16"
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            /> */}
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarButtonsExample">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
