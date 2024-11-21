import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "../admin/AdminLogin";
import Dashboard from "../dashboard/Dashboard";
import { PrivateRoute } from "./PrivateRoute";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </>
  );
};
