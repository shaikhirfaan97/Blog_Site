import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import reg from "../assets/reg.jpg";
const Test2 = () => {
  const nav = useNavigate();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:9000/api/v1/user/register",
        input
      );
      nav("/login");
      // alert(res.data.message);
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
      <section class="container py-4 text-center text-lg-start opacity-75 ">
        <div class="card mb-3 bg-light  text-dark bg-opacity-25">
          <div class="row g-0 d-flex align-items-center">
            <div class="col-lg-4 d-none d-lg-flex">
              <img
                src={reg}
                alt="Trendy Pants and Shoes"
                class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
              />
            </div>
            <div class="col-lg-8">
              <div class="card-body py-5 px-md-5">
                <form onSubmit={handleRegister}>
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      name="username"
                      value={input.username}
                      onChange={(e) => {
                        setInput({ ...input, [e.target.name]: e.target.value });
                      }}
                      id="username"
                      class="form-control"
                    />
                    <label class="form-label text-white" for="form1Example1">
                      Full Name
                    </label>
                  </div>
                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      name="email"
                      value={input.email}
                      onChange={(e) => {
                        setInput({ ...input, [e.target.name]: e.target.value });
                      }}
                      id="form2Eemail"
                      class="form-control"
                    />
                    <label class="form-label text-white" for="form2Example1">
                      Email address
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      name="password"
                      value={input.password}
                      onChange={(e) => {
                        setInput({ ...input, [e.target.name]: e.target.value });
                      }}
                      id="form2Exs"
                      class="form-control"
                    />
                    <label class="form-label text-white" for="form2Example2">
                      Password
                    </label>
                  </div>

                  <button type="submit" class="btn btn-primary btn-block mb-4 ">
                    Sign Up
                  </button>
                  <div class="row mb-4">
                    <div class="col ">
                      <Link className="text-white" to={"/login"}>
                        Already Have Account
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

export default Test2;
