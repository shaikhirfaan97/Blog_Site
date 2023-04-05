import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleBlog = () => {
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
      <div className="container py-5 w-75">
        <div className="card mb-3">
          <img
            src={`http://localhost:9000/${blog.thumbnail}`}
            className="card-img-top w-50 mx-auto"
            alt={blog.title}
          />

          <div className="card-body">
            <hr />
            <h5 className="card-title text-center py-4">{blog.title}</h5>
            <p className="card-text text-center py-4">{blog.description}</p>
            <button className="btn btn-primary" onClick={() => navigate("/")}>
              Back to Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
