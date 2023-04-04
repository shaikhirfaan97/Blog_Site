import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Test3 = () => {
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
  });
  return (
    <div className="container">
      <div class=" row  py-5 g-5">
        {blog && blog.length > 0 ? (
          blog.map((item) => {
            return (
              <div key={item._id} class="card col-4 g-5">
                <img
                  src={`http://localhost:9000/${item.thumbnail}`}
                  class="card-img-top"
                  alt="Hollywood Sign on The Hill"
                />
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  {/* <p class="card-text">{item.description}</p> */}
                  <Link to={`/blog/${item._id}`} className="btn btn-primary">
                    Read More
                  </Link>
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

export default Test3;
