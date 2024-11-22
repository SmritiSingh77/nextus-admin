import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const isAuth = localStorage.getItem("accessToken");
    const location = useLocation();

    if (location.pathname === "/login" && isAuth) {
        return <Navigate to="/dashboard" replace={true} />;
    }

    if (!isAuth) {
        return <Navigate to="/login" state={location.pathname} replace={true} />;
    }

    return children;
};
