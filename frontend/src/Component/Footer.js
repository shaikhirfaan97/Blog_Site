import React from "react";

const Footer = () => {
  return (
    <>
      <section className="">
        <footer
          className="text-center text-white"
          style={{ backgroundColor: "#0a4275" }}
        >
          <div className="container p-4 pb-0">

          </div>

          <div
            className="text-center p-3"
            style={{ backgroundCcolor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 Copyright:
            <a className="text-white" href="https://techie-irfan.netlify.app/">
              Click Here : To Find Me
            </a>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
