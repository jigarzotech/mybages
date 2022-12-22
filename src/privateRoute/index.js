import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'

function PrivateRoute({ children }) {
    const user = useSelector((state) => state.user)
    console.log(user.user);
    const userToken = user.user && Object.keys(user.user).length !== 0
    const auth = userToken;
    return auth ? children : <Navigate to="/" />;
}

export default PrivateRoute;