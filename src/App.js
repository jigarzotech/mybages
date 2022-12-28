import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from '../src/pages/home'
import Login from './pages/login';
import Signup from './pages/signup';
import MyCart from './pages/MyCart'
import { ROUTES } from './routes/route'
import PrivateRoute from './privateRoute';
import Toast from './components/toast';
import { useSelector } from 'react-redux';
import PageNotFound from './pages/pageNotFound';
import MyWishlist from './pages/MyWishlist';

function App() {
  const user = useSelector((state) => state.user)
  const userToken = user.user && Object.keys(user.user).length !== 0
  const auth = userToken;
  const navigate = useNavigate()
  return (
    <>
      <Toast />
      <Routes>
        <Route exact path="/"
          element={<Login />} />
        <Route exact path={ROUTES.SIGNUP}
          element={<Signup />} />
        <Route path="*"
          element={<PageNotFound />} />
        {auth &&
          <>
            <Route exact path={ROUTES.HOME}
              element={
                <Home />} />
            <Route exact path={ROUTES.MYCART}
              element={
              <MyCart />} />
          <Route exact path={ROUTES.MYWISHLIST}
            element={
              <MyWishlist />} />
            <Route path="*"
              element={<PageNotFound/>} />
          </>
        }
      </Routes>
    </>
  );
}

export default App;
