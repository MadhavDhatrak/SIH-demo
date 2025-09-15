import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    phone: '',
    address: '',
    role: 'user' // Default to user role
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear errors when user starts typing
    if (error) setError('');
    if (success) setSuccess('');
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleRoleChange = (e) => {
    const role = e.target.value;
    setFormData(prev => ({
      ...prev,
      role,
      username: '', // Clear username when switching roles
      password: '',
      confirmPassword: ''
    }));
    setError('');
    setSuccess('');
    setValidationErrors({});
  };

  const validateForm = () => {
    const errors = {};
    
    // Username validation
    if (!formData.username.trim()) {
      errors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      errors.username = 'Username must be at least 3 characters long';
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      errors.username = 'Username can only contain letters, numbers, and underscores';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Phone validation (10-15 digits after stripping non-digits)
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else {
      const digitCount = formData.phone.replace(/\D/g, '').length;
      if (digitCount < 10 || digitCount > 10) {
        errors.phone = 'Please enter a valid phone number ';
      }
    }
    
    // Password validation
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }
    
    // Confirm password validation
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    
    // Address validation
    if (!formData.address.trim()) {
      errors.address = 'Address is required';
    } else if (formData.address.length < 10) {
      errors.address = 'Please provide a more detailed address';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setError('');
    setSuccess('');

    // Simulate registration process
    setTimeout(() => {
      setSuccess('Registration successful! You can now sign in with your credentials.');
      
      // Clear form
      setFormData({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        phone: '',
        address: '',
        role: formData.role
      });
      
      setLoading(false);
      
      // Redirect to login after a short delay
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }, 1000);
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-header">
          <div className="logo">
            <div className="logo-icon">🌊</div>
            <h1>Ocean Hazard Platform</h1>
          </div>
          <p className="register-subtitle">
            Join our community to report ocean hazards and help protect our waters
          </p>
          <div className="feature-badges">
            <span className="badge">🌊 Ocean Protection</span>
            <span className="badge">👥 Community Driven</span>
            <span className="badge">🔬 Data Analytics</span>
          </div>
        </div>

        <div className="register-card">
          <div className="card-header">
            <h2>Create Account</h2>
            <p>Register to start reporting hazards or manage the platform</p>
          </div>

          <div className="card-body">
            {error && (
              <div className="alert alert-danger">
                {error}
              </div>
            )}

            {success && (
              <div className="alert alert-success">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Role Selection */}
              <div className="form-group">
                <label className="form-label">Account Type</label>
                <div className="role-selector">
                  <label className="role-option">
                    <input
                      type="radio"
                      name="role"
                      value="user"
                      checked={formData.role === 'user'}
                      onChange={handleRoleChange}
                    />
                    <span className="role-label">
                      <span className="role-icon">👤</span>
                      <span className="role-text">
                        <strong>User</strong>
                        <small>Report hazards and view incidents</small>
                      </span>
                    </span>
                  </label>
                  
                  <label className="role-option">
                    <input
                      type="radio"
                      name="role"
                      value="admin"
                      checked={formData.role === 'admin'}
                      onChange={handleRoleChange}
                    />
                    <span className="role-label">
                      <span className="role-icon">🛡️</span>
                      <span className="role-text">
                        <strong>Admin</strong>
                        <small>Manage platform and analyze data</small>
                      </span>
                    </span>
                  </label>
                </div>
              </div>

              {/* Username Field */}
              <div className="form-group">
                <label htmlFor="username" className="form-label">
                  {formData.role === 'admin' ? 'Admin Name' : 'Username'} *
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className={`form-control ${validationErrors.username ? 'is-invalid' : ''}`}
                  placeholder={formData.role === 'admin' ? 'Enter your admin name' : 'Enter your username'}
                  value={formData.username}
                  onChange={handleInputChange}
                  disabled={loading}
                />
                {validationErrors.username && (
                  <div className="invalid-feedback">{validationErrors.username}</div>
                )}
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-control ${validationErrors.email ? 'is-invalid' : ''}`}
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={loading}
                />
                {validationErrors.email && (
                  <div className="invalid-feedback">{validationErrors.email}</div>
                )}
              </div>

              {/* Phone Field */}
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`form-control ${validationErrors.phone ? 'is-invalid' : ''}`}
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={loading}
                />
                {validationErrors.phone && (
                  <div className="invalid-feedback">{validationErrors.phone}</div>
                )}
              </div>

              {/* Password Field */}
              <div className="form-group">
                <label htmlFor="password" className="form-label">Password *</label>
                <div className="password-input">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className={`form-control ${validationErrors.password ? 'is-invalid' : ''}`}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleInputChange}
                    disabled={loading}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={loading}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
                {validationErrors.password && (
                  <div className="invalid-feedback">{validationErrors.password}</div>
                )}
                <div className="password-hint">
                  Password must be at least 6 characters with uppercase, lowercase, and number
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password *</label>
                <div className="password-input">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    className={`form-control ${validationErrors.confirmPassword ? 'is-invalid' : ''}`}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    disabled={loading}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    disabled={loading}
                  >
                    {showConfirmPassword ? '🙈' : '👁️'}
                  </button>
                </div>
                {validationErrors.confirmPassword && (
                  <div className="invalid-feedback">{validationErrors.confirmPassword}</div>
                )}
              </div>

              {/* Address Field */}
              <div className="form-group">
                <label htmlFor="address" className="form-label">Address *</label>
                <textarea
                  id="address"
                  name="address"
                  className={`form-control ${validationErrors.address ? 'is-invalid' : ''}`}
                  placeholder="Enter your full address (street, city, state, country)"
                  rows="3"
                  value={formData.address}
                  onChange={handleInputChange}
                  disabled={loading}
                />
                {validationErrors.address && (
                  <div className="invalid-feedback">{validationErrors.address}</div>
                )}
                <div className="address-hint">
                  This helps us verify your location for hazard reporting
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Creating Account...
                  </>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>
          </div>

          <div className="card-footer">
            <p className="text-center">
              Already have an account?{' '}
              <Link to="/login" className="text-primary">
                Sign in here
              </Link>
            </p>
          </div>
        </div>

        <div className="register-footer">
          <p className="text-center text-muted">
            By creating an account, you agree to our terms of service and privacy policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
