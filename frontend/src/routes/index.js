import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Páginas

import Home from "../pages/Home";
import Models from "../pages/Models";
import AboutUs from "../pages/AboutUs";
import AddModels from "../pages/AddModels";
import EditModels from "../pages/EditModels";

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/vehicles" element={<AddModels />} />
        <Route path="/vehicles/:id" element={<EditModels />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
