import React, { useState } from 'react';

const Signup = ({ onSignup }) => {
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length >= 8;
  };

  const handleSignup = () => {
    if (!role || !userId || !isValidEmail(email) || !firstName || !lastName || !isPasswordValid(password)) {
      alert('Please fill all fields with valid information.');
      return;
    }
    // Dummy signup logic: just call onSignup with role
    onSignup(role);
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold text-green-600 text-center mb-6">
          🌱 EcoLearn Platform - Sign Up
        </h1>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Choose your role:</h3>
          <div className="space-y-3">
            <button
              onClick={() => setRole('student')}
              className={`w-full p-4 rounded-lg border-2 transition-all ${role === 'student'
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 bg-white hover:border-green-300'
                }`}
            >
              <div className="text-left">
                <div className="text-xl text-black font-semibold">🎓 Student</div>
                <div className="text-sm text-gray-600">Learn and earn eco-points</div>
              </div>
            </button>
            <button
              onClick={() => setRole('teacher')}
              className={`w-full p-4 rounded-lg border-2 transition-all ${role === 'teacher'
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 bg-white hover:border-green-300'
                }`}
            >
              <div className="text-left">
                <div className="text-xl text-black font-semibold">👩‍🏫 Teacher</div>
                <div className="text-sm text-gray-600">Create challenges and track progress</div>
              </div>
            </button>
          </div>

          <input
            type="text"
            placeholder="Teacher/Student ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 text-black"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 text-black"
          />
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full bg-white p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 text-black"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full bg-white p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 text-black"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 text-black"
          />

          <button
            onClick={handleSignup}
            className="w-full py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition-all"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
