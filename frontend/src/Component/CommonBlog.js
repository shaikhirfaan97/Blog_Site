import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchAllBlog = async () => {
      const res = await axios.get(
        "http://localhost:9000/api/v1/get/commonblog"
      );
      setBlogs(res.data);
    };
    fetchAllBlog();
  }, []);
  return (
    <div className="container">
      <h2 className="text-center py-5">Our Users Blogs</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {blogs.map((item) => (
          <div key={item._id} className="col mb-4">
            <div className="card h-100">
              <img
                src={`http://localhost:9000/${item.thumbnail}`}
                className="card-img-top"
                alt="Hollywood Sign on The Hill"
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p
                  className="card-decscription"
                  style={{
                    height: "3em",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.description}
                </p>
                <Link to={`/blog/${item._id}`} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
