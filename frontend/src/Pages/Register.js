import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:9000/api/v1/user/register",
        input
      );
      alert(res.data.message);
      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <>
      <div className="mx-auto">
        <div className="column">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 w-50">
              <label for="exampleInputPassword1" className="form-label">
                Username
              </label>
              <input
                type="text"
                value={input.username}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                name="username"
                className="form-control"
                id="exampleInputTExt"
              />
            </div>
            <div className="mb-3 w-50">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={input.email}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3 w-50">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                name="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
