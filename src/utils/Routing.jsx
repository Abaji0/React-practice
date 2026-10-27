import React from "react";
import Home from "../Components/Home";
import User from "../Components/User";
import About from "../Components/About";
import { Route, Routes } from "react-router-dom";
import UserDetail from "../Components/UserDetail";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />}>
          <Route path="/user/:name" element={<UserDetail />} />
        </Route>

        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default Routing;
