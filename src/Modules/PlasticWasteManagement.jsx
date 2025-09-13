import React from "react";

const PlasticWasteManagement = ({ onBack }) => (
    <div className="min-h-screen bg-green-50 p-6">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <button onClick={onBack} className="mb-4 text-white bg-black p-2 rounded">
                ← Back
            </button>
            <h2 className="text-3xl font-bold text-green-600 mb-4">
                Plastic Waste Management
            </h2>
            <div className="mb-6">
                <img
                    src="/Waste Management.jpg"
                    alt="Plastic Waste Management"
                    className="w-full h-60 object-cover rounded-md mb-4"
                />
                <div className="aspect-w-16 aspect-h-9 mb-4">
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/XyYisjWbiKg"
                        title="Plastic Waste Management Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <section className="mb-8">
                <h1 className="text-3xl font-bold text-green-600 mb-4">🌍 Why Plastic Waste Management Matters</h1>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Plastic waste poses significant environmental challenges due to its persistence and volume.</li>
                    <li>Effective management reduces pollution, conserves resources, and protects ecosystems.</li>
                    <li>Understanding management techniques is crucial for sustainable development.</li>
                </ul>
            </section>

            {/* Sources of Plastic Waste */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">🗑️ Common Sources of Plastic Waste</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Packaging materials, single-use plastics, industrial scraps, and medical waste are major contributors.</li>
                    <li>Domestic and agricultural sources also add significantly to plastic waste.</li>
                </ul>
            </section>

            {/* Management Techniques */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">🔄 Plastic Waste Management Techniques</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Mechanical recycling, feedstock recycling, landfilling, and innovative reuse methods.</li>
                    <li>Segregation at source and producer responsibility are key regulatory measures.</li>
                </ul>
            </section>

            {/* Environmental and Health Impacts */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">🐠 Environmental and Health Impacts</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Plastic pollution harms marine and terrestrial life, and microplastics affect human health.</li>
                    <li>Burning plastics releases toxic fumes, contributing to air pollution and respiratory issues.</li>
                </ul>
            </section>
        </div>
    </div>
);

export default PlasticWasteManagement;
