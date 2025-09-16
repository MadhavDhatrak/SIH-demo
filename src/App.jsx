import './App.css';
import LandingPage from './components/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IncidentForm from './components/IncidentForm';
import FeaturesPage from './components/FeaturesPage';
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/incident-form" element={<IncidentForm />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
