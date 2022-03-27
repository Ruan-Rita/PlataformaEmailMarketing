import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Templates from "../pages/Campaign";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { isAuthetication } from "../utils/auth";

const PrivateRoute = () => {
  return isAuthetication() ? <Outlet /> : <Navigate to="/login" />;
};

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/template" element={<PrivateRoute />}>
          <Route path="/template" element={<Templates />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
