import React from "react";

const EnergyConservation = ({ onBack }) => (
  <div className="min-h-screen bg-green-50 p-6">
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <button onClick={onBack} className="mb-4 text-white bg-black p-2 rounded">
        ← Back
      </button>
      <h2 className="text-3xl font-bold text-green-600 mb-4">
        Energy Conservation
      </h2>
      <div className="mb-6">
        <img
          src="/Energy Management.jpg"
          alt="Energy Conservation"
          className="w-full h-60 object-cover rounded-md mb-4"
        />
        <div className="aspect-w-16 aspect-h-9 mb-4">
          {/* YouTube Video Placeholder */}
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/4b8x4rKiAhE"
            title="Energy Conservation Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-green-600 mb-4">🏠 Why Energy Efficiency Matters</h1>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Heating and cooling account for nearly half of a typical home’s energy use.</li>
          <li>Small inefficiencies—like air leaks or outdated appliances—can lead to significant energy waste.</li>
          <li>Improving energy efficiency reduces monthly costs and environmental impact.</li>
        </ul>
      </section>

      {/* Key Energy-Saving Strategies */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">🔧 Key Energy-Saving Strategies</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          <li>
            <span className="font-semibold">Seal Cracks and Gaps</span>
            <ul className="list-disc list-inside ml-6 space-y-2 mt-2">
              <li>Use caulk or weatherstripping around windows, doors, and foundations.</li>
              <li>Prevents conditioned air from escaping and outdoor air from entering.</li>
              <li>Especially important in older homes with poor insulation.</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Add Insulation</span>
            <ul className="list-disc list-inside ml-6 space-y-2 mt-2">
              <li>Focus on attics, basements, and crawl spaces.</li>
              <li>Insulation helps maintain indoor temperature, reducing heating/cooling load.</li>
              <li>Recommended R-values vary by region; higher values offer better thermal resistance.</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Upgrade to Energy-Efficient Appliances</span>
            <ul className="list-disc list-inside ml-6 space-y-2 mt-2">
              <li>Look for ENERGY STAR® certified products.</li>
              <li>Modern refrigerators, washers, and HVAC systems use significantly less energy.</li>
              <li>Pay attention to energy labels and estimated annual consumption.</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Smart Thermostat Use</span>
            <ul className="list-disc list-inside ml-6 space-y-2 mt-2">
              <li>Program thermostats to reduce heating/cooling when you're away or asleep.</li>
              <li>Some models learn your habits and adjust automatically.</li>
              <li>Can save up to 10% annually on heating and cooling costs.</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Switch to LED Lighting</span>
            <ul className="list-disc list-inside ml-6 space-y-2 mt-2">
              <li>LEDs use up to 80% less energy than traditional incandescent bulbs.</li>
              <li>Longer lifespan reduces replacement frequency and waste.</li>
              <li>Available in various color temperatures for ambiance control.</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Environmental & Financial Benefits */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">🌱 Environmental & Financial Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Reduces greenhouse gas emissions from power generation.</li>
          <li>Lowers monthly utility bills and long-term maintenance costs.</li>
          <li>Supports national goals for sustainability and energy independence.</li>
        </ul>
      </section>

      {/* Behavioral Tips */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">🧠 Behavioral Tips</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Turn off lights and electronics when not in use.</li>
          <li>Unplug chargers and devices to avoid phantom loads.</li>
          <li>Wash clothes in cold water and air-dry when possible.</li>
        </ul>
      </section>
    </div>
  </div>
);

export default EnergyConservation;
