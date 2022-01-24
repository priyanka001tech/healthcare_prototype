import React from "react";
import Login from "./pages/login/Login";
import Drlogin from "./pages/login_Doctor/Drlogin";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Userlogin from "./pages/loginUser/Userlogin";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/login_as_Doctor" element={<Drlogin />} exact />
        <Route path="/login_as_User" element={<Userlogin />} exact />
      </Routes>
    </Router>
  );
}

export default App;
