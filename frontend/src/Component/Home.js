import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetAllBlog = async () => {
      const res = await axios.get("http://localhost:9000/api/v1//get/allblog", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setBlog(res.data);
    };
    fetAllBlog();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center py-5">Your Blogs</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 mb-4">
        {blog && blog.length > 0 ? (
          blog.map((item) => {
            return (
              <div key={item._id} className="col">
                <div className="card h-100">
                  <img
                    src={`http://localhost:9000/${item.thumbnail}`}
                    className="card-img-top"
                    alt="Hollywood Sign on The Hill"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <Link to={`/blog/${item._id}`} className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h2>Loading....</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
