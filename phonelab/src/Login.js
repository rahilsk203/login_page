import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import users from "./users.json"; // Import users data
import illustration from "./illustration.png"; // Replace with your image path
import "./Login.css"; // Optional CSS file for styling

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Initialize navigation

  const handleLogin = (e) => {
    e.preventDefault();

    // Check credentials against JSON data
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      setError("");
      console.log("Login successful!");
      
      navigate("/home"); // Navigate to Home page
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="content">
        {/* Info Section */}
        <div className="info-section">
          <h1>Get Your Device Repair Anytime</h1>
          <p>
            PhoneLab brings top-notch repair services. We specialize in repairing a variety of brands,
            ensuring convenience and expertise meet at your home. Your trusted tech solution awaits!
          </p>
          <div className="illustration">
            <img src={illustration} alt="Device Repair" />
          </div>
          <p className="terms">
            By creating an account you agree with our Terms of Service, Privacy Policy, and our default Notification Settings.
          </p>
        </div>

        {/* Login Section */}
        <div className="login-section">
          <form className="login-form" onSubmit={handleLogin}>
            <h2>Sign in</h2>

            {error && <p style={{ color: "red" }}>{error}</p>} {/* Error Message */}

            {/* Email Input */}
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
            </div>

            {/* Options */}
            <div className="form-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button type="submit" className="login-button">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;