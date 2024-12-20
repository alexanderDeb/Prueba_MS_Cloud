import React from "react";
import ConsultPage from "../pages/Consult";
import CreatePage from "../pages/Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Navigator() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<ConsultPage/>} />
        <Route path="/crear" element={<CreatePage/>} />
      </Routes>
    </Router>
  );
}
