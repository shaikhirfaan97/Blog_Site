import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Header from "./Component/Header";
import AddBlog from "./Pages/AddBlog";
import AddCategory from "./Pages/AddCategory";
import Singleblog from "./Pages/Singleblog";
import PrivateRoute from "./Services/ProtectedRoute";
import Test from "./Component/Test";
import Test2 from "./Component/Test2";
import Test3 from "./Component/Test3";
import Test4 from "./Component/Test4";
import Test5 from "./Component/Test5";
import Test6 from "./Component/Test6";
// import GuestNav from "./Component/GuestNav";
const App = () => {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/login" element={<Test />} />
        <Route path="/register" element={<Test2 />} />
        {/* //Protect Route */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Test3 />} />
          <Route path="/add-blog" element={<Test5 />} />
          <Route path="/add-category" element={<Test6/>} />
          <Route path="/blog/:id" element={<Test4 />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
