import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
  });
  // console.log(input)
  const handleCategory = async (e) => {
    e.preventDefault();
    // console.log(input);
    try {
      const res = await axios.post(
        "http://localhost:9000/api/v1/add/category",
        input,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert(res.data.title);
      console.log(res.data);
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <>
      <div className="container shadow">
        <h2 className="text-center my-3">Add New Category</h2>
        <div className="col-xl-12 my-3 d-flex items-center justify-content-center">
          <div className="column">
            <form onSubmit={handleCategory}>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Category
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={input.title}
                  onChange={(e) => {
                    console.log(e.target.name, e.target.value);
                    setInput({ ...input, [e.target.name]: e.target.value });
                  }}
                  name="title"
                  id="exampleInputPassword1"
                />

                <button type="submit" className="btn btn-primary">
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
