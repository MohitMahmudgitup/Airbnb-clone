import React from 'react'

const About = () => {
  const reasons = [
    "CENTRAL LOCATION – 1 MRT stop to TRX and 2 stops to KL city with free shuttle van from this apartment to MRT station (few minutes away)",
    "CONVENIENCE – There's 7-11, 99 speedmart, Pharmacy, supermarket, abundance of restaurants, salon, spa, laundromat, ATM machine, all at the lobby!",
    "STUNNING VIEW – Let the gorgeous KL skyline be your backdrop",
    "THE POOL – There are 3 pools here to spoil yourself",
    "THE GARDEN TRAIL – Explore the relaxing garden trails!",
  ];

  return (
    <div className="space-y-4 pb-10 border-b px-4 sm:px-0">
      <h2 className="font-medium text-gray-800 text-lg sm:text-xl">
        6 reasons why you should stay here
      </h2>

      <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
        {reasons.map((reason, idx) => (
          <li key={idx}>{reason}</li>
        ))}
      </ul>

      <button className="px-5 w-full sm:w-36 py-2.5 bg-gray-100 rounded-xl text-sm sm:text-base font-medium text-gray-700 hover:bg-gray-200 transition">
        Show more
      </button>
    </div>
  );
};

export default About;
