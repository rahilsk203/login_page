import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Redirect to Login Page
    navigate("/");
  };

  return (
    <div className="home-page">
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
}

export default Home;