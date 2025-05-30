import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserRole } from "../../services/authService";

export const FacultyDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { isAuthenticated, isFaculty } = getUserRole();

    if (!isAuthenticated || !isFaculty) {
      navigate("/faculty/login");
    }
  }, [navigate]);

  return (
    <div className="container">
      <h1>Welcome to Faculty Dashboard</h1>
    </div>
  );
};
