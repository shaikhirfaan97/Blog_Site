import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "../Component/Nav";
import GuestNav from "../Component/GuestNav";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const HandleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <>
      {token && token !== null ? (<Nav/>) :( <GuestNav/>)}

    </>
  );
};

export default Header;
