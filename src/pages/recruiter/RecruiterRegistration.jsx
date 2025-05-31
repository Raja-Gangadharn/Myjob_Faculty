import { useState } from 'react';
import { registerRecruiter } from '../../services/authService';
import { Link } from "react-router-dom";
import './recruiter.css';

export const RecruiterRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    college: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!formData.college) newErrors.college = 'Please select a college.';
    if (!formData.email.trim()) newErrors.email = 'College email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address.';
    if (!formData.password.trim()) newErrors.password = 'Password is required.';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  try {
    await registerRecruiter(formData);
    alert('Recruiter registration successful!');
    // Optionally redirect or clear form
  } catch (err) {
    alert(err.detail || 'Registration failed.');
  }
};
  return (
    <div className="d-flex  justify-content-center align-items-center min-vh-100 bg-light">
      
        <div className="row g-0 card-shadow">
          {/* Left Panel */}
          <div className="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center bg-primary text-white p-4 rounded-start">
            <h4 className="text-center mb-3">Welcome to Faculty Recruiter</h4>
            <p className="text-center">
              We connect universities with a professional network of qualified faculty — quickly, efficiently, and affordably.
            </p>
          </div>

          {/* Right Panel */}
          <div className="col-md-6 col-12 bg-white p-4 rounded-end">
            <h4 className="mb-3 text-center text-md-start">Recruiter Registration</h4>
            <form onSubmit={handleSubmit} noValidate>
              {/* First Name */}
              <div className="mb-3">
                <label className="form-label">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                />
                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
              </div>

              {/* Last Name */}
              <div className="mb-3">
                <label className="form-label">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                />
                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
              </div>

              {/* College */}
              <div className="mb-3">
                <label className="form-label">Choose College *</label>
                <select
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  className={`form-select ${errors.college ? 'is-invalid' : ''}`}
                >
                  <option value="">-- Select College --</option>
                  <option value="College A">College A</option>
                  <option value="College B">College B</option>
                  <option value="College C">College C</option>
                </select>
                {errors.college && <div className="invalid-feedback">{errors.college}</div>}
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">College Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label">Password *</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>

              <button type="submit" className="btn btn-primary w-100">Sign Up</button>
              <p className="text-center mt-3">
                Already have an account? <Link to="/recruiter/login">Sign in</Link>
              </p>
            </form>
          </div>
        </div>
      
    </div>
  );
};