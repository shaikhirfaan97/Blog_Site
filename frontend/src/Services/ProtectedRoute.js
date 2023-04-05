import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = () => {
  const auth = localStorage.getItem("token");
  return auth && auth !== null  ? <Outlet /> : <Navigate to="/common" />;
};

export default PrivateRoute;
