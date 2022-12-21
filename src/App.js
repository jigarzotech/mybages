import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../src/pages/home'
import Login from './pages/login';
import Signup from './pages/signup';
import MyCart from './pages/MyCart'
import PrivateRoute from './privateRoute';
function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/home" element={
        <PrivateRoute><Home /> </PrivateRoute>} />
      <Route exact path="/mycart" element={<PrivateRoute> <MyCart /> </PrivateRoute>} />

    </Routes>
  );
}

export default App;

{/* <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashBoard />
              </PrivateRoute>
            }
          /> */}