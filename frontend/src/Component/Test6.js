import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import category from "../assets/category.jpg"

const Test6 = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
      title: "",
    });
    // console.log(input)
    const handleCategory = async (e) => {
      e.preventDefault();
      console.log(input);
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
    <section class="container py-5 text-center text-dark text-lg-start opacity-75 ">
      <div class=" mb-3 bg-light p-2 text-dark bg-opacity-25">
        <div class="row g-0 d-flex align-items-center">
          <div class="col-lg-4 d-none d-lg-flex">
            <img
              src={category}
              alt="Trendy Pants and Shoes"
              class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
            />
          </div>
          <div class="col-lg-8 text-dark">
            <div class="card-body text-dark py-5 px-md-5">
            <h2 className="text-center
             py-5">Add New Blog</h2>
              <form onSubmit={handleCategory}>
                <div class="form-outline mb-4">
                  <input
                    type="text"
                    value={input.title}
                    name="title"
                    onChange={(e) => {
                      setInput({ ...input, [e.target.name]: e.target.value });
                    }}
                    id="form2Example1"
                    class="form-control"
                    placeholder="Please Enter New Category"
                  />
                  <label class="form-label" for="form2Example1">
                    Category
                  </label>
                </div>

                <button type="submit" class="btn btn-primary btn-block mb-4 ">
                  Add to Category
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test6;
