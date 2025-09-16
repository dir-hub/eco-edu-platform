import React, { useState } from "react";
import {
  environmentalModules,
  sampleQuizzes,
  environmentalModulesMain,
} from "./data";
import PlasticWasteManagement from "./Modules/PlasticWasteManagement";
import EnergyConservation from "./Modules/EnergyConservation";
import WaterConservation from "./Modules/WaterConservation";
import PunjabMap from "./Modules/PunjabMap";
const StudentDashboard = ({
  onNavigate,
  ecoPoints,
  setEcoPoints,
  completedQuizzes,
  setCompletedQuizzes,
}) => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedModule, setSelectedModule] = useState(null);
  // Handler to open module learning page
  const openModule = (moduleId) => {
    setSelectedModule(moduleId);
  };

  // Handler to close module learning page
  const closeModule = () => {
    setSelectedModule(null);
  };

  const getBadges = () => {
    const badges = [];
    if (completedQuizzes.length >= 1) badges.push("Eco Starter");
    if (completedQuizzes.length >= 2) badges.push("Quiz Master");
    if (ecoPoints >= 100) badges.push("Green Champion");
    return badges;
  };

  const startQuiz = (moduleId) => {
    if (sampleQuizzes[moduleId] && !completedQuizzes.includes(moduleId)) {
      setSelectedQuiz(sampleQuizzes[moduleId]);
      setCurrentQuestion(0);
      setSelectedAnswer(null);
      setQuizCompleted(false);
      setScore(0);
    }
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const nextQuestion = () => {
    const currentQuizData = selectedQuiz.questions[currentQuestion];
    let newScore = score;

    if (selectedAnswer === currentQuizData.correct) {
      newScore += 10;
      setScore(newScore);
    }
    if (currentQuestion < selectedQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
      setEcoPoints(ecoPoints + newScore);

      const moduleId = Object.keys(sampleQuizzes).find(
        (key) => sampleQuizzes[key] === selectedQuiz
      );
      if (moduleId && !completedQuizzes.includes(parseInt(moduleId))) {
        setCompletedQuizzes([...completedQuizzes, parseInt(moduleId)]);
      }
    }
  };

  const closeQuiz = () => {
    setSelectedQuiz(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setQuizCompleted(false);
    setScore(0);
  };

  if (selectedModule) {
    if (selectedModule === 1) {
      return <PlasticWasteManagement onBack={closeModule} />;
    } else if (selectedModule === 2) {
      return <EnergyConservation onBack={closeModule} />;
    } else if (selectedModule === 3) {
      return <WaterConservation onBack={closeModule} />;
    }
  }

  if (selectedQuiz) {
    if (quizCompleted) {
      return (
        <div className="min-h-screen bg-green-50 p-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-3xl font-bold text-green-600 mb-4">
                🎉 Quiz Completed!
              </h2>
              <p className="text-xl mb-4">You scored {score} points!</p>
              <p className="text-lg mb-6">Points earned: +{score} Eco-Points</p>
              <button
                onClick={closeQuiz}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      );
    }
    const currentQuizData = selectedQuiz.questions[currentQuestion];
    return (
      <div className="min-h-screen bg-green-50 p-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl text-black font-bold">
                Quiz Question {currentQuestion + 1}/
                {selectedQuiz.questions.length}
              </h2>
              <button
                onClick={closeQuiz}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-black mb-4">
                {currentQuizData.question}
              </h3>
              <div className="space-y-3">
                {currentQuizData.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-4 text-black bg-white text-left rounded-lg border-2 transition-all ${
                      selectedAnswer === index
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-green-300"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={nextQuestion}
              disabled={selectedAnswer === null}
              className={`w-full py-3 rounded-lg font-semibold transition-all ${
                selectedAnswer !== null
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {currentQuestion < selectedQuiz.questions.length - 1
                ? "Next Question"
                : "Finish Quiz"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-green-600">
              🌱 Student Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 px-4 py-2 rounded-lg">
                <span className="font-semibold text-green-700">
                  Eco-Points: {ecoPoints}
                </span>
              </div>
              <button
                onClick={() => onNavigate("leaderboard")}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Leaderboard
              </button>
              <button
                onClick={() => onNavigate("logout")}
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
          <h2 className="text-xl text-black font-bold mb-4">🏆 Your Badges</h2>
          <div className="flex flex-wrap gap-3">
            {getBadges().map((badge, index) => (
              <span
                key={index}
                className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold"
              >
                🏅 {badge}
              </span>
            ))}
            {getBadges().length === 0 && (
              <p className="text-gray-500">Complete quizzes to earn badges!</p>
            )}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl text-black font-bold mb-4">
            🌍 Environmental Learning Modules
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {environmentalModulesMain.map((module) => (
              <div
                key={module.id}
                className="border border-gray-400 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => openModule(module.id)}
              >
                <img
                  src={module.image}
                  alt={module.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg text-black font-semibold mb-2">
                  {module.title}
                </h3>
                <p className="text-sm text-gray-600">{module.description}</p>
                <div className="mt-2 text-blue-600 underline">Learn More</div>
              </div>
            ))}
            {environmentalModules.map((module) => (
              <div
                key={module.id}
                className="border border-gray-400 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{module.icon}</div>
                <h3 className="text-lg text-black font-semibold mb-2">
                  {module.title}
                </h3>

                <button
                  onClick={() => startQuiz(module.id)}
                  disabled={
                    !sampleQuizzes[module.id] ||
                    completedQuizzes.includes(module.id)
                  }
                  className={`w-full py-2 px-4 rounded-lg font-semibold transition-all ${
                    sampleQuizzes[module.id] &&
                    !completedQuizzes.includes(module.id)
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-black text-white cursor-not-allowed"
                  }`}
                >
                  {completedQuizzes.includes(module.id)
                    ? "✅ Completed"
                    : "Take Quiz"}
                </button>
              </div>
            ))}
          </div>
        </div>
        <PunjabMap />
      </div>
    </div>
  );
};

export default StudentDashboard;
