import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import StudentDashboard from './StudentDashboard';
import TeacherDashboard from './TeacherDashboard';
import LeaderBoard from './LeaderBoard';
import './App.css';

const App = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState('');
  const [ecoPoints, setEcoPoints] = useState(0);
  const [completedQuizzes, setCompletedQuizzes] = useState([]);

  const handleLogin = (role) => {
    setUserRole(role);
    navigate('/' + role);
  };

  const handleSignup = (role) => {
    setUserRole(role);
    navigate('/' + role);
  };

  const handleNavigate = (page) => {
    navigate('/' + page);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/student" element={<StudentDashboard onNavigate={handleNavigate} ecoPoints={ecoPoints} setEcoPoints={setEcoPoints} completedQuizzes={completedQuizzes} setCompletedQuizzes={setCompletedQuizzes} />} />
        <Route path="/teacher" element={<TeacherDashboard onNavigate={handleNavigate} />} />
        <Route path="/leaderboard" element={<LeaderBoard onNavigate={handleNavigate} currentUserRole={userRole} />} />
      </Routes>
    </div>
  );
};

export default App;