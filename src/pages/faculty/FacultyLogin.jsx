// src/pages/faculty/FacultyLogin.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import "./faculty.css";

export const FacultyLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await loginUser(email, password);

      if (userData.is_faculty) {
        navigate("/faculty/dashboard");
      } else {
        setError("Access denied. Not a faculty member.");
      }
    } catch (err) {
      setError(err.detail || "Login failed.");
    }
  };

  return (
    <div className="login-container faculty-page">
      <div className="login-content">
        <div className="login-left-panel faculty-left-panel">
          <div className="left-panel-content">
            <h2 className="welcome-text">Welcome Back!</h2>
            <p className="subtitle">Access your faculty account to explore academic opportunities</p>
            <div className="features-list">
              <div className="feature-item">
                <span className="feature-icon">🎓</span>
                <span>Access Academic Jobs</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📚</span>
                <span>Manage Your Profile</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔍</span>
                <span>Search Opportunities</span>
              </div>
            </div>
          </div>
        </div>
        <div className="login-right-panel">
          <div className="login-form-container">
            <button className="btn-close position-absolute top-0 end-0 m-3" onClick={() => navigate('/')}></button>
            <h3 className="text-center mb-4 faculty-title">Faculty Login</h3>
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label className="form-label">Email</label>
                <div className="input-group">
                  <span className="input-icon">📧</span>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-icon">🔒</span>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="fac-login-button">
                <span>Login</span>
                <span className="button-icon">→</span>
              </button>
            </form>
            <div className="text-center mt-4">
              <p className="register-text">
                New faculty member? <Link to="/faculty/registration" className="fac-register-link">Register here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
