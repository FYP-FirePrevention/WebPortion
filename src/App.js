// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainContent from './Maincontent';
import Profile from './Profile';
import LoginPage from './LoginPage';
import Layout from './Layout';
import Incidents from './Incidents';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Layout><MainContent /></Layout>} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
          <Route path="/incidents" element={<Layout><Incidents /></Layout>} />
          {/* Redirect from root to dashboard */}
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
      </Routes>
    </Router>
  );
};

export default App;
