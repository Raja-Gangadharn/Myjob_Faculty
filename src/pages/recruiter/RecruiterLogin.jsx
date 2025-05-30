import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import "./recruiter.css"; 

export const RecruiterLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(email, password);
      if (user.is_recruiter) {
        navigate("/recruiter/dashboard");
      } else {
        setError("Access denied. You're not registered as Recruiter.");
      }
    } catch (err) {
      setError(err.detail || "Login failed");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-modal card shadow-lg p-4">
        <button className="btn-close position-absolute top-0 end-0 m-3" onClick={() => navigate('/')}></button>
        <h3 className="text-center mb-4 recruiter-title">Recruiter Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <div className="text-center mt-3">
          <p>New user? <Link to="/faculty/register">Register here</Link></p>
        </div>
      </div>
    </div>
  );
};
