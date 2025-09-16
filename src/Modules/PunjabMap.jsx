import React, { useState } from "react";
import punjabChallenges from "../punjabChallenges";

/**
 * PunjabMap component renders an SVG map of Punjab with clickable districts.
 * When a district is clicked, it displays the district name and its environmental challenge.
 * Tailwind CSS is used for styling.
 */
const PunjabMap = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  // Handler for clicking a district
  const handleDistrictClick = (district) => {
    setSelectedDistrict(district);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-6xl mx-auto">
      <h3 className="text-xl font-bold mb-4 text-center text-green-700">
        Explore Punjab Challenges
      </h3>
      <div className="flex flex-col md:flex-row md:space-x-6">
        {/* SVG Map of Punjab */}
        <svg
          viewBox="0 0 600 600"
          className="w-full md:w-1/2 cursor-pointer"
          aria-label="Punjab Map"
        >
          {/* Districts as clickable paths */}
          <path
            id="Amritsar"
            d="M50,50 L130,50 L130,130 L50,130 Z"
            fill={selectedDistrict === "Amritsar" ? "#34D399" : "#A7F3D0"}
            stroke="#065F46"
            strokeWidth="2"
            onClick={() => handleDistrictClick("Amritsar")}
          />
          <text x="60" y="90" className="pointer-events-none" fill="#065F46" fontSize="12" fontWeight="bold">
            Amritsar
          </text>

          <path
            id="Ludhiana"
            d="M140,50 L220,50 L220,130 L140,130 Z"
            fill={selectedDistrict === "Ludhiana" ? "#34D399" : "#A7F3D0"}
            stroke="#065F46"
            strokeWidth="2"
            onClick={() => handleDistrictClick("Ludhiana")}
          />
          <text x="150" y="90" className="pointer-events-none" fill="#065F46" fontSize="12" fontWeight="bold">
            Ludhiana
          </text>

          <path
            id="Jalandhar"
            d="M230,50 L310,50 L310,130 L230,130 Z"
            fill={selectedDistrict === "Jalandhar" ? "#34D399" : "#A7F3D0"}
            stroke="#065F46"
            strokeWidth="2"
            onClick={() => handleDistrictClick("Jalandhar")}
          />
          <text x="240" y="90" className="pointer-events-none" fill="#065F46" fontSize="12" fontWeight="bold">
            Jalandhar
          </text>

          <path
            id="Patiala"
            d="M320,50 L400,50 L400,130 L320,130 Z"
            fill={selectedDistrict === "Patiala" ? "#34D399" : "#A7F3D0"}
            stroke="#065F46"
            strokeWidth="2"
            onClick={() => handleDistrictClick("Patiala")}
          />
          <text x="330" y="90" className="pointer-events-none" fill="#065F46" fontSize="12" fontWeight="bold">
            Patiala
          </text>

          <path
            id="Bathinda"
            d="M410,50 L490,50 L490,130 L410,130 Z"
            fill={selectedDistrict === "Bathinda" ? "#34D399" : "#A7F3D0"}
            stroke="#065F46"
            strokeWidth="2"
            onClick={() => handleDistrictClick("Bathinda")}
          />
          <text x="420" y="90" className="pointer-events-none" fill="#065F46" fontSize="12" fontWeight="bold">
            Bathinda
          </text>

          <path
            id="Mohali"
            d="M50,140 L130,140 L130,220 L50,220 Z"
            fill={selectedDistrict === "Mohali" ? "#34D399" : "#A7F3D0"}
            stroke="#065F46"
            strokeWidth="2"
            onClick={() => handleDistrictClick("Mohali")}
          />
          <text x="60" y="180" className="pointer-events-none" fill="#065F46" fontSize="12" fontWeight="bold">
            Mohali
          </text>

          <path
            id="Hoshiarpur"
            d="M140,140 L220,140 L220,220 L140,220 Z"
            fill={selectedDistrict === "Hoshiarpur" ? "#34D399" : "#A7F3D0"}
            stroke="#065F46"
            strokeWidth="2"
            onClick={() => handleDistrictClick("Hoshiarpur")}
          />
          <text x="150" y="180" className="pointer-events-none" fill="#065F46" fontSize="12" fontWeight="bold">
            Hoshiarpur
          </text>

          <path
            id="Firozpur"
            d="M230,140 L310,140 L310,220 L230,220 Z"
            fill={selectedDistrict === "Firozpur" ? "#34D399" : "#A7F3D0"}
            stroke="#065F46"
            strokeWidth="2"
            onClick={() => handleDistrictClick("Firozpur")}
          />
          <text x="240" y="180" className="pointer-events-none" fill="#065F46" fontSize="12" fontWeight="bold">
            Firozpur
          </text>

          <path
            id="Moga"
            d="M320,140 L400,140 L400,220 L320,220 Z"
            fill={selectedDistrict === "Moga" ? "#34D399" : "#A7F3D0"}
            stroke="#065F46"
            strokeWidth="2"
            onClick={() => handleDistrictClick("Moga")}
          />
          <text x="330" y="180" className="pointer-events-none" fill="#065F46" fontSize="12" fontWeight="bold">
            Moga
          </text>

          <path
            id="Pathankot"
            d="M410,140 L490,140 L490,220 L410,220 Z"
            fill={selectedDistrict === "Pathankot" ? "#34D399" : "#A7F3D0"}
            stroke="#065F46"
            strokeWidth="2"
            onClick={() => handleDistrictClick("Pathankot")}
          />
          <text x="420" y="180" className="pointer-events-none" fill="#065F46" fontSize="12" fontWeight="bold">
            Pathankot
          </text>

          <path
            id="Sangrur"
            d="M50,230 L130,230 L130,310 L50,310 Z"
            fill={selectedDistrict === "Sangrur" ? "#34D399" : "#A7F3D0"}
            stroke="#065F46"
            strokeWidth="2"
            onClick={() => handleDistrictClick("Sangrur")}
          />
          <text x="60" y="270" className="pointer-events-none" fill="#065F46" fontSize="12" fontWeight="bold">
            Sangrur
          </text>

          <path
            id="Barnala"
            d="M140,230 L220,230 L220,310 L140,310 Z"
            fill={selectedDistrict === "Barnala" ? "#34D399" : "#A7F3D0"}
            stroke="#065F46"
            strokeWidth="2"
            onClick={() => handleDistrictClick("Barnala")}
          />
          <text x="150" y="270" className="pointer-events-none" fill="#065F46" fontSize="12" fontWeight="bold">
            Barnala
          </text>

          <path
            id="TarnTaran"
            d="M230,230 L310,230 L310,310 L230,310 Z"
            fill={selectedDistrict === "TarnTaran" ? "#34D399" : "#A7F3D0"}
            stroke="#065F46"
            strokeWidth="2"
            onClick={() => handleDistrictClick("TarnTaran")}
          />
          <text x="270" y="270" textAnchor="middle" className="pointer-events-none" fill="#065F46" fontSize="10" fontWeight="bold">
            Tarn Taran
          </text>

          <path
            id="Kapurthala"
            d="M320,230 L400,230 L400,310 L320,310 Z"
            fill={selectedDistrict === "Kapurthala" ? "#34D399" : "#A7F3D0"}
            stroke="#065F46"
            strokeWidth="2"
            onClick={() => handleDistrictClick("Kapurthala")}
          />
          <text x="330" y="270" className="pointer-events-none" fill="#065F46" fontSize="12" fontWeight="bold">
            Kapurthala
          </text>

          <path
            id="FatehgarhSahib"
            d="M410,230 L490,230 L490,310 L410,310 Z"
            fill={selectedDistrict === "FatehgarhSahib" ? "#34D399" : "#A7F3D0"}
            stroke="#065F46"
            strokeWidth="2"
            onClick={() => handleDistrictClick("FatehgarhSahib")}
          />
          <text x="450" y="270" textAnchor="middle" className="pointer-events-none" fill="#065F46" fontSize="10" fontWeight="bold">
            Fatehgarh Sahib
          </text>

          <path
            id="Rupnagar"
            d="M50,320 L130,320 L130,400 L50,400 Z"
            fill={selectedDistrict === "Rupnagar" ? "#34D399" : "#A7F3D0"}
            stroke="#065F46"
            strokeWidth="2"
            onClick={() => handleDistrictClick("Rupnagar")}
          />
          <text x="60" y="360" className="pointer-events-none" fill="#065F46" fontSize="12" fontWeight="bold">
            Rupnagar
          </text>

          <path
            id="SBSNagar"
            d="M140,320 L220,320 L220,400 L140,400 Z"
            fill={selectedDistrict === "SBSNagar" ? "#34D399" : "#A7F3D0"}
            stroke="#065F46"
            strokeWidth="2"
            onClick={() => handleDistrictClick("SBSNagar")}
          />
          <text x="150" y="360" className="pointer-events-none" fill="#065F46" fontSize="12" fontWeight="bold">
            SBS Nagar
          </text>

          <path
            id="Fazilka"
            d="M230,320 L310,320 L310,400 L230,400 Z"
            fill={selectedDistrict === "Fazilka" ? "#34D399" : "#A7F3D0"}
            stroke="#065F46"
            strokeWidth="2"
            onClick={() => handleDistrictClick("Fazilka")}
          />
          <text x="240" y="360" className="pointer-events-none" fill="#065F46" fontSize="12" fontWeight="bold">
            Fazilka
          </text>

          <path
            id="Muktsar"
            d="M320,320 L400,320 L400,400 L320,400 Z"
            fill={selectedDistrict === "Muktsar" ? "#34D399" : "#A7F3D0"}
            stroke="#065F46"
            strokeWidth="2"
            onClick={() => handleDistrictClick("Muktsar")}
          />
          <text x="330" y="360" className="pointer-events-none" fill="#065F46" fontSize="12" fontWeight="bold">
            Muktsar
          </text>

          <path
            id="Faridkot"
            d="M410,320 L490,320 L490,400 L410,400 Z"
            fill={selectedDistrict === "Faridkot" ? "#34D399" : "#A7F3D0"}
            stroke="#065F46"
            strokeWidth="2"
            onClick={() => handleDistrictClick("Faridkot")}
          />
          <text x="420" y="360" className="pointer-events-none" fill="#065F46" fontSize="12" fontWeight="bold">
            Faridkot
          </text>

          <path
            id="Gurdaspur"
            d="M50,410 L130,410 L130,490 L50,490 Z"
            fill={selectedDistrict === "Gurdaspur" ? "#34D399" : "#A7F3D0"}
            stroke="#065F46"
            strokeWidth="2"
            onClick={() => handleDistrictClick("Gurdaspur")}
          />
          <text x="60" y="450" className="pointer-events-none" fill="#065F46" fontSize="12" fontWeight="bold">
            Gurdaspur
          </text>

          <path
            id="Mansa"
            d="M140,410 L220,410 L220,490 L140,490 Z"
            fill={selectedDistrict === "Mansa" ? "#34D399" : "#A7F3D0"}
            stroke="#065F46"
            strokeWidth="2"
            onClick={() => handleDistrictClick("Mansa")}
          />
          <text x="150" y="450" className="pointer-events-none" fill="#065F46" fontSize="12" fontWeight="bold">
            Mansa
          </text>

          <path
            id="Malerkotla"
            d="M230,410 L310,410 L310,490 L230,490 Z"
            fill={selectedDistrict === "Malerkotla" ? "#34D399" : "#A7F3D0"}
            stroke="#065F46"
            strokeWidth="2"
            onClick={() => handleDistrictClick("Malerkotla")}
          />
          <text x="240" y="450" className="pointer-events-none" fill="#065F46" fontSize="12" fontWeight="bold">
            Malerkotla
          </text>
        </svg>

        {/* District info panel */}
        <div className="mt-6 md:mt-0 md:w-1/2 bg-green-50 p-4 rounded-md shadow-inner">
          {selectedDistrict ? (
            <>
              {/* District name header */}
              <h4 className="text-lg font-semibold text-green-800 mb-3">
                {selectedDistrict}
              </h4>

              {/* Challenge section */}
              <div className="mb-3">
                <h5 className="text-sm font-medium text-green-900 mb-1">
                  Environmental Challenge:
                </h5>
                <p className="text-green-600 text-sm">
                  {punjabChallenges[selectedDistrict].challenge}
                </p>
              </div>

              {/* Solution section */}
              <div>
                <h5 className="text-sm font-medium text-green-900 mb-1">
                  Proposed Solution:
                </h5>
                <p className="text-green-600 text-sm">
                  {punjabChallenges[selectedDistrict].solution}
                </p>
              </div>
            </>
          ) : (
            <p className="text-green-700">
              Click on a district to see its environmental challenge and solution.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PunjabMap;
