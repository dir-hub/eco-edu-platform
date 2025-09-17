import React from 'react';
import { studentAnalysisData } from './data';

const getProgressBarColor = (progress) => {
  if (progress >= 90) return 'bg-green-700';
  if (progress >= 70) return 'bg-green-400';
  if (progress >= 40) return 'bg-yellow-500';
  return 'bg-red-500';
};

const StudentAnalysis = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-700">Student Progress Analysis</h1>
          <button
            onClick={() => onNavigate('teacher')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Back to Dashboard
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentAnalysisData.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{student.name}</h2>
              <p className="text-gray-600 mb-1"><span className="font-semibold">Roll No / ID:</span> {student.id}</p>
              <p className="text-gray-600 mb-3">
                <span className="font-semibold">
                  {student.type === 'school' ? 'Class:' : 'Department:'}
                </span> {student.type === 'school' ? student.class : student.dept}
              </p>
              <div className="mb-3">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">Progress</span>
                  <span className="text-gray-700 font-medium">{student.progress}%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-4">
                  <div
                    className={`${getProgressBarColor(student.progress)} h-4 rounded-full`}
                    style={{ width: `${student.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center text-green-600 font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2C8.13 2 5 5.13 5 9c0 3.87 3.13 7 7 7s7-3.13 7-7c0-3.87-3.13-7-7-7z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v7m0 0l-3-3m3 3l3-3"
                  />
                </svg>
                <span>{student.ecoPoints} Eco Points</span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-gray-700 italic">
          Click on any student to view detailed analysis.
        </p>
      </div>
    </div>
  );
};

export default StudentAnalysis;
