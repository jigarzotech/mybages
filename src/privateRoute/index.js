// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useSelector } from 'react-redux'

// function PrivateRoute({ children }) {
//     const user = useSelector((state) => state.user)
//     // console.log(user.user);
//     const userToken = user.user && Object.keys(user.user).length !== 0
//     const auth = userToken;
//     return auth ? children : <Navigate to="/" />;
// }

// export default PrivateRoute;

// import React from "react";
// import { Navigate, Route, Router } from "react-router-dom";
// import { useSelector } from 'react-redux'
// import Home from "../pages/home";
// import MyCart from "../pages/MyCart";
// import { ROUTES } from "../routes/route";
// function PrivateRoute() {
//     // const children = { Home, MyCart }
//     const user = useSelector((state) => state.user)
//     // console.log(user.user);
//     const userToken = user.user && Object.keys(user.user).length !== 0
//     const auth = userToken;

//     return auth ?
//         <Router>
//             <Route exact path={ROUTES.HOME}
//                 element={
//                     <Home />} />
//             <Route exact path={ROUTES.MYCART}
//                 element={
//                     <MyCart />} />
//         </Router>
//         : <Navigate to="/" />;
// }

// export default PrivateRoute;

import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import MyCart from '../pages/MyCart';
import { ROUTES } from '../routes/route';

function PrivateRoute() {
    const user = useSelector((state) => state.user)
    const userToken = user.user && Object.keys(user.user).length !== 0
    const auth = userToken;
    return (
        auth &&
        <Routes>
            <Route exact path={ROUTES.HOME}
                element={
                    <Home />} />
            <Route exact path={ROUTES.MYCART}
                element={
                    <MyCart />} />
        </Routes>
    )
}
export default PrivateRoute;
