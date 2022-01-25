import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Landing from "./components/landing/landing.jsx";
import Create from "./components/Create/create.jsx";
import Details from "./components/Details/detail.jsx";
import React from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/create" element={<Create/>} />
        <Route exact path="/detail/:id" element={<Details/>} />
      </Routes>
    </>
  );
}

export default App;
