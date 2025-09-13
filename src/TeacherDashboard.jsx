import React, { useState } from 'react';

const TeacherDashboard = ({ onNavigate }) => {
  const [challenges, setChallenges] = useState([
    {
      id: 1,
      title: 'Plant a Tree Challenge',
      description: 'Students need to plant a tree and share a photo with location.'
    },
    {
      id: 2,
      title: 'Plastic-Free Week',
      description: 'Avoid using plastic items for one week and document alternatives used.'
    }
  ]);

  const [newChallengeTitle, setNewChallengeTitle] = useState('');
  const [newChallengeDescription, setNewChallengeDescription] = useState('');

  const addChallenge = () => {
    if (newChallengeTitle.trim() && newChallengeDescription.trim()) {
      const newChallenge = {
        id: challenges.length + 1,
        title: newChallengeTitle,
        description: newChallengeDescription
      };
      
      setChallenges([...challenges, newChallenge]);
      setNewChallengeTitle('');
      setNewChallengeDescription('');
    }
  };

  return (
    <div className="min-h-screen bg-green-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-green-600">👩‍🏫 Teacher Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onNavigate('leaderboard')}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Leaderboard
              </button>
              <button
                onClick={() => onNavigate('login')}
                className="bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">➕ Create New Challenge</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Challenge Title
              </label>
              <input
                type="text"
                value={newChallengeTitle}
                onChange={(e) => setNewChallengeTitle(e.target.value)}
                className="w-full text-black bg-white p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                placeholder="e.g., Reduce Water Usage Challenge"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Challenge Description
              </label>
              <textarea
                value={newChallengeDescription}
                onChange={(e) => setNewChallengeDescription(e.target.value)}
                rows="3"
                className="w-full text-black  bg-white
                 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                placeholder="Describe what students need to do..."
              />
            </div>
            
            <button
              onClick={addChallenge}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Add Challenge
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">📋 Current Challenges</h2>
          {challenges.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No challenges created yet.</p>
          ) : (
            <div className="space-y-4">
              {challenges.map((challenge) => (
                <div key={challenge.id} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600">{challenge.description}</p>
                  <div className="mt-3 text-sm text-gray-500">
                    Challenge ID: #{challenge.id}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;