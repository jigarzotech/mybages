import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../src/pages/home'
import Login from './pages/login';
import Signup from './pages/signup';
import MyCart from './pages/MyCart'
import { ROUTES } from './routes/route'
import PrivateRoute from './privateRoute';
import Toast from './components/toast';
function App() {

  return (
    <>
      <Toast />
      <Routes>
        <Route exact path="/"
          element={<Login />} />
        <Route exact path={ROUTES.SIGNUP}
          element={<Signup />} />
        <Route path="*"
          element={<Login />} />
        <Route exact path={ROUTES.HOME}
          element={<PrivateRoute>
            <Home /> </PrivateRoute>} />
        <Route exact path={ROUTES.MYCART}
          element={<PrivateRoute>
            <MyCart /> </PrivateRoute>} />
      </Routes>
    </>
  );
}

export default App;
