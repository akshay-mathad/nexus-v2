import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import './styles/App.css';
import SearchFeature from './components/SearchFeature';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/search" element={<SearchFeature />} />
        </Routes>
      </Router> 
    </div>
  )
}

export default App
