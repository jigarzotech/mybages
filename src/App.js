import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../src/pages/home'
import Login from './pages/login';
import Signup from './pages/signup';

function App() {

  return (
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
