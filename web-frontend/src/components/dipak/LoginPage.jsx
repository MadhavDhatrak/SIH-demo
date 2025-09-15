import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'user' // Default to user role
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleRoleChange = (e) => {
    const role = e.target.value;
    setFormData(prev => ({
      ...prev,
      role,
      username: '', // Clear username when switching roles
      password: ''
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate login process
    setTimeout(() => {
      // Create mock user data
      const userData = {
        id: 1,
        username: formData.username,
        role: formData.role,
        email: `${formData.username}@example.com`
      };

      // Store auth data in localStorage
      localStorage.setItem('authToken', 'mock_token_' + Date.now());
      localStorage.setItem('userRole', formData.role);
      localStorage.setItem('userData', JSON.stringify(userData));
      
      // Call parent callback
      if (onLogin) {
        onLogin(userData);
      }
      
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <div className="logo">
            <div className="logo-icon">🌊</div>
            <h1>Ocean Hazard Platform</h1>
          </div>
          <p className="login-subtitle">
            Crowdsourced Ocean Hazard Reporting & Analytics
          </p>
          <div className="feature-badges">
            <span className="badge">🛡️ Secure</span>
            <span className="badge">🌍 Global</span>
            <span className="badge">⚡ Real-time</span>
          </div>
        </div>

        <div className="login-card">
          <div className="card-header">
            <h2>Sign In</h2>
            <p>Access your account to report hazards or manage the platform</p>
          </div>

          <div className="card-body">
            {error && (
              <div className="alert alert-danger">
                {error}
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
                  {formData.role === 'admin' ? 'Admin Name' : 'Username'}
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  placeholder={formData.role === 'admin' ? 'Enter your admin name' : 'Enter your username'}
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  disabled={loading}
                />
              </div>

              {/* Password Field */}
              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="password-input">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
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
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={loading || !formData.username || !formData.password}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Signing In...
                  </>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>
          </div>

          <div className="card-footer">
            <p className="text-center">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary">
                Create one here
              </Link>
            </p>
          </div>
        </div>

        <div className="login-footer">
          <p className="text-center text-muted">
            Secure platform for ocean hazard reporting and emergency management
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
