import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Dashboard from './Dashboard/Dashboard'
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardRoute from "./DashboardRoute/DashboardRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardRoute />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
