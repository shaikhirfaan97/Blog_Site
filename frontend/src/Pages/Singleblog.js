import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Singleblog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchsingleBlog = async () => {
      const res = await axios.get(
        `http://localhost:9000/api/v1/get/blog/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setBlog(res.data);
    };
    fetchsingleBlog();
  }, [id]);
  return (
    <>
      <div className="container shadow">
        <h2 className="text-center my-3">Add New Category</h2>
        <div className="col-xl-12 my-3 d-flex items-center justify-content-center">
          <div className="column">
            <h1 className="my-3">{blog.title}</h1>
            <p className="my-3">Published Date:</p>
            <img
              src={`http://localhost:9000/${blog.thumbnail}`}
              className="img img-responsive img-rounded my-3"
              alt=""
            />
            <p className="my-3">{blog.description}</p>
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Back to Post
        </button>
      </div>
    </>
  );
};

export default Singleblog;
