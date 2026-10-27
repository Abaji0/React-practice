import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import User from "./Components/User";
import About from "./Components/About";
import Nav from "./Components/Nav";
import Routing from "./utils/Routing";

function App() {
  return (
    <>
      <Nav/>

     < Routing/>
    </>
  );
}

export default App;
