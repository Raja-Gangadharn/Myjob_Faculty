<<<<<<< HEAD
import React, { useState } from 'react';
import './faculty.css'; // Custom styles

export const FacultyRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    workPreference: '',
    resume: null,
    transcripts: null,
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert('You must agree to the terms and conditions.');
      return;
    }
    console.log('Form Submitted:', formData);
  };

=======
const FacultyRegistration = () => {
>>>>>>> de83df2cf4225a96b0078082483221a70295d792
  return (
    <div className="container-fluid min-vh-100 d-flex p-0">
      {/* Left Panel */}
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-white left-panel">
        <h1 className="mb-3">Welcome to Faculty Finder</h1>
        <h4 className="mb-2 text-center">
             Faculty Finder’s mission is simple…
        </h4>
        <p className="text-center w-75">
         To connect Universities & Colleges to a professional network of qualified Faculty - Quickly - Efficiently – Inexpensively
        </p>
        <p className="text-center w-75">
         Faculty Finder is a streamlined search portal that pairs qualified faculty with colleges
        and universities in a matter of minutes
        </p>
      </div>

      {/* Right Panel */}
      <div className="col-md-6 d-flex align-items-center justify-content-center bg-white">
        <form className="w-100 p-4" style={{ maxWidth: '500px' }} onSubmit={handleSubmit}>
          <h3 className="mb-3">Registration</h3>
          <p className="text-muted">Enter your details to register</p>

          <div className="mb-3">
            <label className="form-label">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Work Preference *</label>
            <select
              name="workPreference"
              value={formData.workPreference}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select preference</option>
              <option value="remote">Remote</option>
              <option value="onsite">Onsite</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Resume *</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Transcripts *</label>
            <input
              type="file"
              name="transcripts"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="form-check-input"
              id="agreeTerms"
            />
            <label className="form-check-label" htmlFor="agreeTerms">
              I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100">Sign up</button>

          <p className="text-center mt-3">
            Already have an account? <a href="#">Sign in</a>
          </p>

          <div className="text-center mt-4">
            <p className="text-muted">Or sign in with</p>
            <div className="d-flex justify-content-center gap-2">
              <button type="button" className="btn btn-outline-secondary">Google</button>
              <button type="button" className="btn btn-outline-secondary">Facebook</button>
              <button type="button" className="btn btn-outline-secondary">Twitter</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
