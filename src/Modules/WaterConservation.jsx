import React from "react";

const WaterConservation = ({ onBack }) => (
  <div className="min-h-screen bg-green-50 p-6">
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <button onClick={onBack} className="mb-4 text-white bg-black p-2 rounded">
        ← Back
      </button>
      <h2 className="text-3xl font-bold text-green-600 mb-4">
        Water Conservation
      </h2>
      <div className="mb-6">
        <img
          src="/Water Management.jpeg"
          alt="Water Conservation"
          className="w-full h-60 object-cover rounded-md mb-4"
        />
        <div className="aspect-w-16 aspect-h-9 mb-4">
          {/* YouTube Video Placeholder */}
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/your_video_id_here"
            title="Water Conservation Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
       <section className="mb-8">
        <h1 className="text-3xl font-bold text-green-600 mb-4">🌍 Why Water Conservation Matters</h1>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Water is a finite resource essential for life, agriculture, industry, and ecosystems.</li>
          <li>Despite its abundance, only a small fraction is usable freshwater.</li>
          <li>Overuse and pollution have led to severe shortages in many regions.</li>
        </ul>
      </section>

      {/* Everyday Water Wastage */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">🚿 Everyday Water Wastage</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Common habits like leaving taps running, excessive lawn watering, and inefficient appliances contribute to waste.</li>
          <li>Urbanization and population growth intensify the pressure on water resources.</li>
        </ul>
      </section>

      {/* Methods of Conservation */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">🛠️ Methods of Conservation</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><span className="font-semibold">Rainwater harvesting:</span> Collecting and storing rainwater for reuse.</li>
          <li><span className="font-semibold">Drip irrigation:</span> Efficient watering technique for agriculture.</li>
          <li><span className="font-semibold">Fixing leaks:</span> Prevents unnecessary loss in households and infrastructure.</li>
          <li><span className="font-semibold">Using water-efficient appliances:</span> Reduces consumption in homes and industries.</li>
        </ul>
      </section>

      {/* Behavioral Changes */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">🧠 Behavioral Changes</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Encourages mindful usage, like turning off taps while brushing or using buckets instead of hoses.</li>
          <li>Promotes community awareness and education to foster collective responsibility.</li>
        </ul>
      </section>

      {/* Environmental Impact */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">🌱 Environmental Impact</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Conserving water helps maintain biodiversity and supports sustainable development.</li>
          <li>Reduces energy consumption linked to water treatment and distribution.</li>
        </ul>
      </section>
    </div>
  </div>
);

export default WaterConservation;
