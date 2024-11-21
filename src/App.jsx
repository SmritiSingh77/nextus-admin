import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define individual routes here */}
        <Route path="/" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
