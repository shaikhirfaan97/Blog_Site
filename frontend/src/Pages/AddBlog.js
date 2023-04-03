import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const AddBlog = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    descritipon: "",
    category: "",
  });
  const [file, setFile] = useState([]);
  const [selectCategory, setSelectCategory] = useState([]);
  console.log(selectCategory);
  
  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const res = await axios.get(
          "http://localhost:9000/api/v1/get/category",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setSelectCategory(res.data);
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    };
    fetchAllCategories();
  }, []);

  const formdata = new FormData();
  formdata.append("title", input.title);
  formdata.append("description", input.descritipon);
  formdata.append("category", input.category);
  formdata.append("thumbnail", file);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:9000/api/v1/add/blog",
        formdata,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert(res.data.message);
      console.log(res.data);
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <>
      <div className="container shadow">
        <h2 className="text-center my-3">Add New Blog</h2>
        <div className="col-xl-12 my-3 d-flex items-center justify-content-center">
          <form onSubmit={handleSubmit}>
            <div className="column">
              <div class="mb-3 ">
                <label for="exampleInputPassword1" class="form-label">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={input.title}
                  onChange={(e) => {
                    setInput({ ...input, [e.target.name]: e.target.value });
                  }}
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 ">
                <label for="exampleInputPassword1" class="form-label">
                  Category
                </label>
                <select
                  type="text"
                  name="category"
                  onChange={(e) => {
                    setInput({ ...input, [e.target.name]: e.target.value });
                  }}
                  className="form-control"
                  id="exampleInputPassword1"
                >
                  <option disabled>select Category</option>
                  {Array.from(selectCategory).map((item) => {
                    return <option value={item._id}>{item.title}</option>;
                  })}
                </select>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Description
                </label>
                <input
                  type="text"
                  name="descritipon"
                  value={input.descritipon}
                  onChange={(e) => {
                    setInput({ ...input, [e.target.name]: e.target.value });
                  }}
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="input-group mb-3">
                {/* <label class="input-group-text" for="inputGroupFile01">Upload</label> */}
                <input
                  type="file"
                  class="form-control"
                  name="thumbnail"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                  id="inputGroupFile01"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Add Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
