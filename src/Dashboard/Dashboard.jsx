import React from "react";
import { useNavigate } from "react-router-dom";
import "./dashbaord.css";
import Profile from "../assets/profile.jpg";

const Dashboard = () => {
  const navigate = useNavigate();
  const username = JSON.parse(localStorage.getItem("user"));

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("loggedin");
    navigate("/login");
  };
  return (
    <div className="div">
      <div className="dashboard">
        <div className="welcome-container">
          <div className="profile-pic">
            <img src={Profile} alt="Profile Image" />
          </div>
          <div className="welcome-message">
            <h2>Welcome ,{username.fullname}</h2>
            <p>We're glad to have you here.</p>
          </div>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
