import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const HandleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a class="navbar-brand mt-2 mt-lg-0" href="#">
             <h2>Iffu</h2>
              {/* <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height="15"
                alt="MDB Logo"
                loading="lazy"
              /> */}
            </a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/add-blog"
                >
                  Add Blog
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/add-category"
                >
                  Add category
                </Link>
              </li>
            </ul>
          </div>
          <button class="btn btn-primary me-3">
            Welcome:{username}
          </button>
          <button
            class="btn btn-primary me-3"
            onClick={HandleLogout}
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
