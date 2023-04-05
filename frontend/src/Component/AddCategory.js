import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import category from "../assets/category.jpg"

const AddCategory = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
  });

  const handleCategory = async (e) => {
    e.preventDefault();
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
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <section className="container py-5">
      <div className="card bg-light p-2 bg-opacity-25">
        <div className="row g-0 align-items-center">
          <div className="col-lg-4 d-none d-lg-flex">
            <img
              src={category}
              alt="Trendy Pants and Shoes"
              className="w-100 rounded-start"
            />
          </div>
          <div className="col-lg-8">
            <div className="card-body py-5 px-md-5">
              <h2 className="text-center mb-4">Add New Category</h2>
              <form onSubmit={handleCategory}>
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    value={input.title}
                    name="title"
                    onChange={(e) => {
                      setInput({ ...input, [e.target.name]: e.target.value });
                    }}
                    id="categoryTitle"
                    className="form-control"
                    placeholder="Please Enter New Category"
                  />
                  <label htmlFor="categoryTitle" className="form-label">
                    Category Title
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Add Category
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddCategory;
