import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:9000/api/v1/user/login",
        input
      );
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
      nav("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/new/slides/003.webp')",
      }}
    >
      {/* <!-- Section: Design Block --> */}
      <section className="container py-5 text-center text-lg-start opacity-75 ">
        <div className="card mb-3 bg-light p-2 text-dark bg-opacity-25">
          <div className="row g-0 d-flex align-items-center">
            <div className="col-lg-4 d-none d-lg-flex">
              <img
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                alt="Trendy Pants and Shoes"
                className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
              />
            </div>
            <div className="col-lg-8">
              <div className="card-body py-5 px-md-5">
                <form onSubmit={handleSumbit}>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      value={input.email}
                      name="email"
                      onChange={(e) => {
                        setInput({ ...input, [e.target.name]: e.target.value });
                      }}
                      id="form2Example1"
                      className="form-control"
                    />
                    <label className="form-label text-white" for="form2Example1">
                      Email address
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      value={input.password}
                      name="password"
                      onChange={(e) => {
                        setInput({ ...input, [e.target.name]: e.target.value });
                      }}
                      id="form2Example2"
                      className="form-control"
                    />
                    <label className="form-label text-white" for="form2Example2">
                      Password
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block mb-4 ">
                    Sign in
                  </button>
                  <div className="row mb-4">
                    <div className="col ">
                      <Link className="text-white" to={"/register"}>
                        Create New Account
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
