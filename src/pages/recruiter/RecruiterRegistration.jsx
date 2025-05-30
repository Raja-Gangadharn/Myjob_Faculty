import React, { useState } from 'react';
import './recruiter.css'; // Custom styles.

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
    setFormData(prev => ({ ...prev, [name]: value }));
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    console.log('Form submitted:', formData);
    alert('Registration successful!');
    // API call can be added here
  };

  return (
    <div className="container-fluid min-vh-100 d-flex p-0">
      {/* Left Panel */}
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-white left-panel">
        <h1 className="mb-3">Welcome to Faculty Finder</h1>
        <h4 className="mb-2 text-center">Faculty Finder’s mission is simple…</h4>
        <p className="text-center w-75">
          To connect Universities & Colleges to a professional network of qualified Faculty - Quickly - Efficiently – Inexpensively
        </p>
        <p className="text-center w-75">
          Faculty Finder is a streamlined search portal that pairs qualified faculty with colleges
          and universities in a matter of minutes.
        </p>
      </div>

      {/* Right Panel */}
      <div className="col-md-6 d-flex align-items-center justify-content-center bg-white">
        <form className="w-100 p-4" style={{ maxWidth: '500px' }} onSubmit={handleSubmit} noValidate>
          <h3 className="mb-3">Registration</h3>
          <p className="text-muted">Enter your details to register</p>

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

          {/* College Dropdown */}
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

          {/* College Email */}
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

          <button type="submit" className="btn btn-primary w-100">Sign up</button>

          <p className="text-center mt-3">
            Already have an account? <a href="#">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
};
