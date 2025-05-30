import { Link,useNavigate } from "react-router-dom";
import "./faculty.css"; 



export const FacultyLogin = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/'); 
  };
  return (
    <div className="popup-overlay">
      <div className="popup-modal card shadow-lg p-4">
        <button className="btn-close position-absolute top-0 end-0 m-3" onClick={handleClose}></button>
        <h3 className="text-center mb-4 faculty-title">Faculty Login</h3> 
        <form>
          <div className="mb-3">
            <label htmlFor="facultyEmail" className="form-label">Email</label>
            <input type="email" className="form-control" id="facultyEmail" placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label htmlFor="facultyPassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="facultyPassword" placeholder="Enter password" />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <div className="text-center mt-3">
          <p>New user? <Link to="/faculty/Registration">Register here</Link></p>
        </div>
      </div>
    </div>
  )
}
