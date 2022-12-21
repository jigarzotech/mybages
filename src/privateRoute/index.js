import React from "react";
import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux/es/exports";

function PrivateRoute({ children }) {
    const userToken = localStorage.getItem('email');
    const auth = userToken;
    return auth ? children : <Navigate to="/" />;
}

export default PrivateRoute;