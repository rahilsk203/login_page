import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "./users.json"; // Replace with your users.json path
import illustration from "./illustration.png"; // Replace with your image path
import "mdb-react-ui-kit/dist/css/mdb.min.css"; // Import MDBootstrap CSS
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setError("");
      console.log("Login successful!");
      navigate("/home");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="container py-5">
        <div className="row">
          {/* Info Section */}
          <div className="col-md-6 d-flex flex-column align-items-center text-center bg-light py-5 rounded-start">
            <h1 className="mb-4">Get Your Device Repair Anytime</h1>
            <p>
              PhoneLab brings top-notch repair services. We specialize in
              repairing a variety of brands, ensuring convenience and expertise
              meet at your home. Your trusted tech solution awaits!
            </p>
            <img
              src={illustration}
              alt="Device Repair"
              className="img-fluid my-3"
              style={{ maxWidth: "70%" }}
            />
            <p className="text-muted small">
              By creating an account, you agree to our Terms of Service, Privacy
              Policy, and Notification Settings.
            </p>
          </div>

          {/* Login Section */}
          <div className="col-md-6 bg-white p-5 rounded-end shadow-sm">
            <form onSubmit={handleLogin}>
              <h2 className="mb-4 text-center">Sign in</h2>
              {error && (
                <p className="text-danger text-center small">{error}</p>
              )}

              {/* Email Input */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="email">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password Input */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Options */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <input
                    type="checkbox"
                    id="rememberMe"
                    className="form-check-input"
                  />
                  <label htmlFor="rememberMe" className="form-check-label ms-2">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-decoration-none small">
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="btn btn-primary btn-block w-100"
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
