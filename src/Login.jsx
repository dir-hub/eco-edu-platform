import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [selectedRole, setSelectedRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValidEmail = (email) => {
    // Simple email regex validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length >= 8;
  };

  const [emailTouched, setEmailTouched] = React.useState(false);
  const [passwordTouched, setPasswordTouched] = React.useState(false);

  const handleLogin = () => {
    setEmailTouched(true);
    setPasswordTouched(true);
    if (selectedRole && isValidEmail(email) && isPasswordValid(password)) {
      onLogin(selectedRole);
    } else {
      alert('Please select a role, enter a valid email, and a password with at least 8 characters.');
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold text-green-600 text-center mb-6">
          🌱 EcoLearn Platform
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Gamified Environmental Education for Everyone
        </p>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Choose your role:</h3>
          
          <div className="space-y-3">
            <button
              onClick={() => setSelectedRole('student')}
              className={`w-full p-4 rounded-lg border-2 transition-all ${
                selectedRole === 'student' 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-200 hover:border-green-300'
              }`}
            >
              <div className="text-left">
                <div className="text-xl text-black font-semibold">🎓 Student</div>
                <div className="text-sm text-gray-600">Learn and earn eco-points</div>
              </div>
            </button>
            
            <button
              onClick={() => setSelectedRole('teacher')}
              className={`w-full p-4 rounded-lg border-2 transition-all ${
                selectedRole === 'teacher' 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-200 hover:border-green-300'
              }`}
            >
              <div className="text-left">
                <div className="text-xl text-black font-semibold">👩‍🏫 Teacher</div>
                <div className="text-sm text-gray-600">Create challenges and track progress</div>
              </div>
            </button>
          </div>

          <div className="mt-6 space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setEmailTouched(true)}
              className={`w-full bg-white text-black p-3 border rounded-lg focus:outline-none ${
                !emailTouched ? 'border-green-500 focus:border-green-500' : (isValidEmail(email) ? 'border-green-500 focus:border-green-500' : 'border-red-500')
              }`}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setPasswordTouched(true)}
              className={`w-full bg-white p-3 text-black border rounded-lg focus:outline-none ${
                !passwordTouched ? 'border-green-500 focus:border-green-500' : (isPasswordValid(password) ? 'border-green-500 focus:border-green-500' : 'border-red-500')
              }`}
            />
          </div>
          
          <button
            onClick={handleLogin}
            disabled={!selectedRole || !isValidEmail(email) || !isPasswordValid(password)}
            className={`w-full py-3 rounded-lg font-semibold transition-all ${
              selectedRole && isValidEmail(email) && isPasswordValid(password)
                ? 'bg-green-500 hover:bg-green-600 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Enter Platform
          </button>
          <div className="mt-4 text-center">
            <Link to="/signup" className="text-green-600 hover:underline">
              Don't have an account? Sign up here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
