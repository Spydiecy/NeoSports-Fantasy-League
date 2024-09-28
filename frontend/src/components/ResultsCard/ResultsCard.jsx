import React, { useState, useEffect } from 'react';
import { ChevronRightIcon } from 'lucide-react';

const ResultCard = ({ date, homeTeam, awayTeam, score, venue }) => (
  <div className="bg-[#323232] rounded-lg p-6 w-[30%] mx-4 h-[25vh] flex-shrink-0 transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(0,246,84,0.5)] hover:scale-105">
    <div className="text-center text-lg font-semibold text-white mb-4">{date}</div>
    <div className="flex justify-between items-center mb-4">
      <div className="flex flex-col items-center">
        <img src={homeTeam.logo} alt={homeTeam.name} className="w-10 h-10 mr-3 rounded-full" />
        <span className="text-sm font-medium text-white">{homeTeam.name}</span>
      </div>
      <div className="bg-[#4a4a4a] px-4 py-2 rounded-full text-xl font-bold text-white">
        {score}
      </div>
      <div className="flex items-center justify-end">
        <span className="text-sm font-medium text-white">{awayTeam.name}</span>
        <img src={awayTeam.logo} alt={awayTeam.name} className="w-10 h-10 ml-3 rounded-full" />
      </div>
    </div>
    <div className="text-center text-sm text-gray-400">{venue}</div>
  </div>
);

const ResultsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const results = [
    {
      date: 'Sep 29, 24',
      homeTeam: { name: 'Osasuna', logo: '/placeholder.svg?height=48&width=48' },
      awayTeam: { name: 'Barcelona', logo: '/placeholder.svg?height=48&width=48' },
      score: '4-2',
      venue: 'Estadio El Sadar, Iruñea'
    },
    {
      date: 'Sep 28, 24',
      homeTeam: { name: 'Bayern München', logo: '/placeholder.svg?height=48&width=48' },
      awayTeam: { name: 'Bayer Leverkusen', logo: '/placeholder.svg?height=48&width=48' },
      score: '1-1',
      venue: 'Allianz Arena, München'
    },
    {
      date: 'Sep 28, 24',
      homeTeam: { name: 'Real Sociedad', logo: '/placeholder.svg?height=48&width=48' },
      awayTeam: { name: 'Valencia', logo: '/placeholder.svg?height=48&width=48' },
      score: '3-0',
      venue: 'Reale Arena, Donostia-San Sebastián'
    },
    {
      date: 'Sep 27, 24',
      homeTeam: { name: 'Liverpool', logo: '/placeholder.svg?height=48&width=48' },
      awayTeam: { name: 'Arsenal', logo: '/placeholder.svg?height=48&width=48' },
      score: '2-2',
      venue: 'Anfield, Liverpool'
    },
    {
      date: 'Sep 26, 24',
      homeTeam: { name: 'PSG', logo: '/placeholder.svg?height=48&width=48' },
      awayTeam: { name: 'Marseille', logo: '/placeholder.svg?height=48&width=48' },
      score: '3-1',
      venue: 'Parc des Princes, Paris'
    },
    {
      date: 'Sep 25, 24',
      homeTeam: { name: 'Juventus', logo: '/placeholder.svg?height=48&width=48' },
      awayTeam: { name: 'Inter Milan', logo: '/placeholder.svg?height=48&width=48' },
      score: '1-0',
      venue: 'Allianz Stadium, Turin'
    },
  ];

  const ITEMS_PER_PAGE = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Math.floor(results.length / ITEMS_PER_PAGE) ? 0 : prevIndex + 1
      );
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(timer);
  }, [results.length]);

  return (
    <div className="bg-black text-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        LATEST <span className="text-[#00F654]">RESULTS</span>
      </h2>
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${results.length * (100 / ITEMS_PER_PAGE)}%`
          }}
        >
          {results.map((result, index) => (
            <ResultCard key={index} {...result} />
          ))}
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <button 
          className="flex items-center text-[#00F654] hover:underline focus:outline-none focus:ring-2 focus:ring-[#00F654] focus:ring-opacity-50 rounded-md px-2 py-1" 
          aria-label="View all results"
        >
          View All <ChevronRightIcon className="ml-1" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default ResultsSlider;
