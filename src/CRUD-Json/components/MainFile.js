import React, { useState } from "react";
import "../App.css";
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "./View";

const MainFile = () => {
  // handleView
  const [viewData, setViewData] = useState([]);
  const handleView = (item) => {
    setViewData(item);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home handleView={handleView} />} />

          <Route path="/view/:id" element={<View details={viewData} />} />
        </Routes>
      </BrowserRouter>

      <br />
      <br />
    </div>
  );
}

export default MainFile;
