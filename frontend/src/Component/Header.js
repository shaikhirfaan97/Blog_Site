import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  console.log(username);
  const HandleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Techno Blog
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
            <div className="div-inline mx-auto my-2 my-lg-0">
              {token && token !== null ? (
                <>
                  <button className="btn btn-sm btn-outline-secondary">
                    Welcome:{username}
                  </button>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={HandleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to={"/login"}>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      type="button"
                    >
                      Login
                    </button>
                  </Link>
                  <Link to={"/register"}>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      type="button"
                    >
                      Register
                    </button>
                  </Link>
                </>
              )}
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
