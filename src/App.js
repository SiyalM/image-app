// import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Result from "./components/Result/Result";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
