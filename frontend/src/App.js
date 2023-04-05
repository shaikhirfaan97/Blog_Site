import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import PrivateRoute from "./Services/ProtectedRoute";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Home from "./Component/Home";
import SingleBlog from "./Component/SingleBlog";
import AddBlog from "./Component/AddBlog";
import AddCategory from "./Component/AddCategory";
import CommonBlog from "./Component/CommonBlog"
import Footer from "./Component/Footer";

const App = () => {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/common" element={<CommonBlog />} />
        {/* //Protect Route */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/add-category" element={<AddCategory/>} />
          <Route path="/blog/:id" element={<SingleBlog />} />
        </Route>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
