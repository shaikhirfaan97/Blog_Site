import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Blogs from "./Blogs";

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
      <div class="container py-4 text-center text-lg-start">
        <h2 class="text-center my-3">Add New Blog</h2>
        <form onSubmit={handleSubmit} class="py-5">
          <div class="form-group form-floating mb-4">
            <input
              type="text"
              id="form6Example3"
              name="title"
              value={input.title}
              onChange={(e) => {
                setInput({ ...input, [e.target.name]: e.target.value });
              }}
              class="form-control"
            />
            <label class="form-label" for="form6Example3">
              Title
            </label>
          </div>

          <div class="form-group form-floating mb-4">
            <select
              type="text"
              name="category"
              onChange={(e) => {
                setInput({ ...input, [e.target.name]: e.target.value });
              }}
              class="form-control"
              id="exampleInputPassword1"
            >
              <option disabled selected></option>
              {Array.from(selectCategory).map((item) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.title}
                  </option>
                );
              })}
            </select>
            <label class="form-label" for="exampleInputPassword1">
              Category
            </label>
          </div>

          <div class="form-group form-floating mb-4">
            <textarea
              class="form-control"
              id="form6Example7"
              rows="8"
              name="description"
              value={input.description}
              onChange={(e) => {
                setInput({ ...input, [e.target.name]: e.target.value });
              }}
            ></textarea>
            <label class="form-label" for="form6Example7">
              Additional Information
            </label>
          </div>

          <div class="form-group form-floating mb-4">
            <div class="input-group ">
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
          </div>

          <button type="submit" class="btn btn-primary btn-block mb-4">
            Post Your Blog
          </button>
        </form>
      </div>
      <Blogs />
    </>
    // <div>
    //   <div className="container py-4 text-center  text-lg-start">
    //   <h2 className="text-center my-3">Add New Blog</h2>
    //     <form onSubmit={handleSubmit} className="py-5">
    //       <div class="form-outline mb-4">
    //         <input
    //           type="text"
    //           id="form6Example3"
    //           name="title"
    //           value={input.title}
    //           onChange={(e) => {
    //             setInput({ ...input, [e.target.name]: e.target.value });
    //           }}
    //           class="form-control"
    //         />
    //         <label class="form-label" for="form6Example3">
    //           Title
    //         </label>
    //       </div>

    //       <div class="form-outline mb-4">
    //         <input
    //           type="file"
    //           className="form-control"
    //           name="thumbnail"
    //           onChange={(e) => {
    //             setFile(e.target.files[0]);
    //           }}
    //           id="inputGroupFile01"
    //         />
    //         <label class="form-label" for="form6Example4">
    //           Upload Image
    //         </label>
    //       </div>

    //       <div class="form-outline mb-4">
    //         <select
    //           type="text"
    //           name="category"
    //           onChange={(e) => {
    //             setInput({ ...input, [e.target.name]: e.target.value });
    //           }}
    //           className="form-control"
    //           id="exampleInputPassword1"
    //         >
    //           <option disabled>select Category</option>
    //           {Array.from(selectCategory).map((item) => {
    //             return (
    //               <option key={item._id} value={item._id}>
    //                 {item.title}
    //               </option>
    //             );
    //           })}
    //         </select>
    //         <label class="form-label" for="form6Example5">
    //           Category
    //         </label>
    //       </div>

    //       <div class="form-outline mb-4">
    //         <textarea
    //           class="form-control"
    //           id="form6Example7"
    //           rows="4"
    //           name="descritipon"
    //           value={input.descritipon}
    //           onChange={(e) => {
    //             setInput({ ...input, [e.target.name]: e.target.value });
    //           }}
    //         ></textarea>
    //         <label class="form-label" for="form6Example7">
    //           Additional information
    //         </label>
    //       </div>

    //       <button type="submit" class="btn btn-primary btn-block mb-4">
    //         Post Your Blog
    //       </button>
    //     </form>
    //   </div>
    //   <Test7/>
    // </div>
  );
};

export default AddBlog;
