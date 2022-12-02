import './App.css';
import LandingPage from './pages/LandingPage';
import AccountPage from './pages/AccountPage';
import AdminPage from './pages/AdminPage';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<AccountPage state="login" />} />
          <Route path="/dashboard" element={<AccountPage state="dashboard" />} />

          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
