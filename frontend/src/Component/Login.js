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
      <section class="container py-5 text-center text-lg-start opacity-75 ">
        <div class="card mb-3 bg-light p-2 text-dark bg-opacity-25">
          <div class="row g-0 d-flex align-items-center">
            <div class="col-lg-4 d-none d-lg-flex">
              <img
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                alt="Trendy Pants and Shoes"
                class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
              />
            </div>
            <div class="col-lg-8">
              <div class="card-body py-5 px-md-5">
                <form onSubmit={handleSumbit}>
                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      value={input.email}
                      name="email"
                      onChange={(e) => {
                        setInput({ ...input, [e.target.name]: e.target.value });
                      }}
                      id="form2Example1"
                      class="form-control"
                    />
                    <label class="form-label text-white" for="form2Example1">
                      Email address
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      value={input.password}
                      name="password"
                      onChange={(e) => {
                        setInput({ ...input, [e.target.name]: e.target.value });
                      }}
                      id="form2Example2"
                      class="form-control"
                    />
                    <label class="form-label text-white" for="form2Example2">
                      Password
                    </label>
                  </div>

                  <button type="submit" class="btn btn-primary btn-block mb-4 ">
                    Sign in
                  </button>
                  <div class="row mb-4">
                    <div class="col ">
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
