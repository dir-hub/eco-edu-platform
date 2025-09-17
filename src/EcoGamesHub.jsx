import React, { useState } from 'react';
import { sampleQuizzes } from './data';

// Define the 5 mini-games
const games = [
  {
    id: 1,
    title: 'Eco Quiz Challenge',
    description: 'Test your knowledge on environmental topics with fun quizzes!',
    isFunctional: true,
  },
  {
    id: 2,
    title: 'Green Puzzle',
    description: 'Solve puzzles to learn about sustainable living.',
    isFunctional: false,
  },
  {
    id: 3,
    title: 'Recycle Race',
    description: 'Race against time to sort recyclables correctly.',
    isFunctional: false,
  },
  {
    id: 4,
    title: 'Earth Defender',
    description: 'Defend the planet from pollution in this action game.',
    isFunctional: false,
  },
  {
    id: 5,
    title: 'Sustainability Simulator',
    description: 'Simulate daily choices and see their environmental impact.',
    isFunctional: false,
  },
];

const EcoGamesHub = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Handle button click for games
  const handleGameClick = (game) => {
    if (game.isFunctional) {
      // Open quiz modal
      setSelectedGame(game);
      setShowModal(true);
      setCurrentQuestion(0);
      setSelectedAnswer(null);
      setScore(0);
      setQuizCompleted(false);
    } else {
      // Show Coming Soon popup
      alert('Coming Soon!');
    }
  };

  // Handle answer selection
  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  // Handle next question or finish
  const handleNext = () => {
    const quizData = sampleQuizzes[selectedGame.id].questions;
    const question = quizData[currentQuestion];
    let newScore = score;
    if (selectedAnswer === question.correct) {
      newScore += 10;
      setScore(newScore);
    }
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedGame(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizCompleted(false);
  };

  const quizData = selectedGame ? sampleQuizzes[selectedGame.id].questions : [];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-xl font-bold text-green-600 mb-4">🎮 Eco Games Hub</h2>
      <div className="grid grid-cols-5 gap-4 overflow-x-auto">
        {games.map((game) => (
          <div
            key={game.id}
            className="border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <h3 className="text-lg font-semibold text-black mb-2">{game.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{game.description}</p>
            <button
              onClick={() => handleGameClick(game)}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-semibold transition-all"
            >
              Play Now
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Quiz */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4 min-h-[300px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-green-600">{selectedGame ? selectedGame.title : 'Quiz'}</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            </div>
            {quizCompleted ? (
              <div className="text-center">
                <h4 className="text-2xl font-bold text-green-600 mb-4">Quiz Completed!</h4>
                <p className="text-lg mb-4">Your score: {score} / {quizData.length * 10}</p>
                <button
                  onClick={closeModal}
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-semibold"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <p className="text-sm text-gray-600 mb-4 break-words">
                  Question {currentQuestion + 1} of {quizData.length}
                </p>
                <h4 className="text-lg text-black font-semibold mb-4 break-words">
                  {quizData[currentQuestion].question}
                </h4>
                <div className="space-y-2 mb-4">
                  {quizData[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={`w-full p-3 text-black  text-left rounded-lg border-2 transition-all whitespace-normal ${
                        selectedAnswer === index
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  disabled={selectedAnswer === null}
                  className={`w-full py-2 px-4 rounded-lg font-semibold transition-all ${
                    selectedAnswer !== null
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {currentQuestion < quizData.length - 1 ? 'Next' : 'Finish'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EcoGamesHub;
