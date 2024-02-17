import React from 'react';
import './App.scss';
import {
  HashRouter as Router, Routes, Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { RegisterPage } from './pages/RegistrationPage/RegistrationPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='registration' element={<RegisterPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='profile' element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
