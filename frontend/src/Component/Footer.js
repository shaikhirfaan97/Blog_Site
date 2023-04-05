import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section class="">
        <footer
          class="text-center text-white"
          style={{ backgroundColor: "#0a4275" }}
        >
          <div class="container p-4 pb-0">

          </div>

          <div
            class="text-center p-3"
            style={{ backgroundCcolor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 Copyright:
            <a class="text-white" href="https://techie-irfan.netlify.app/">
              Click Here : To Find Me
            </a>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
