import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-5">
      <h1>Welcome to Faculty Finder</h1>
      <p>Please select your role to continue:</p>
      <button onClick={() => navigate('/faculty/login')} className="btn btn-primary m-3">
        I'm Faculty
      </button>
      <button onClick={() => navigate('/recruiter/login')} className="btn btn-success m-3">
        I'm Recruiter
      </button>
    </div>
  );
};

export default LandingPage;