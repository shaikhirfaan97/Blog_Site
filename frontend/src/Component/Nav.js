import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const HandleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/common");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
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
          <Link className="navbar-brand mt-2 mt-lg-0" to="/">
            <h2>Iffu</h2>
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/add-blog"
                >
                  Add Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/add-category"
                >
                  Add category
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <button className="btn btn-primary me-3">
                Welcome: {username}
              </button>
              <button className="btn btn-primary me-3" onClick={HandleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
