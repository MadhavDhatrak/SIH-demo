import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import LoginPage from './components/dipak/LoginPage';
import RegisterPage from './components/dipak/RegisterPage';
import LandingPage from './components/Chaitanya/Landingpage';
import IncidentForm from './components/Chaitanya/IncidentForm';


function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/incident" element={<IncidentForm />} />
      </Routes>
    </Router>
  );
}

export default App;