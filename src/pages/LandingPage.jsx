
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Add custom styles for animations

const LandingPage = () => {
  return (
    <div>
      {/* Landing Page Header */}
      <header className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4">
        <div className="container-fluid">
          <span className="navbar-brand fw-bold fs-4">JobPortal</span>
          <div className="d-flex">
            <Link to="#" className="nav-link mx-2">News & Resources</Link>
            <Link to="" className="nav-link mx-2">My Account</Link>
          </div>
        </div>
      </header>

      {/* Landing Page Body */}
      <section className="landing-body d-flex flex-column justify-content-center align-items-center text-center p-5">
        <h1 className="mb-4">Welcome to JobPortal</h1>
        <div className="d-flex gap-4 mt-3">
          <Link to="/faculty/login" className="portal-btn faculty-hover btn btn-primary px-5 py-3 fs-5">
            I'm Faculty
          </Link>
          <Link to="/recruiter/login" className="portal-btn recruiter-hover btn btn-success px-5 py-3 fs-5">
            I'm Recruiter
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
