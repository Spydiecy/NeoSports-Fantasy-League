import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Select, SelectItem } from "@nextui-org/react";
import MatchesHoverCard from '../components/MatchesHoverCard';
import ProgressBar from '../components/ProgressBar';
import { getMatches } from './fantasyFootballABI';

export default function FootballLeagues() {
  const [matches, setMatches] = useState([]);
  const [activeButton, setActiveButton] = useState('Upcoming');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const provider = new ethers.BrowserProvider(window.ethereum);
          const matchesData = await getMatches(provider);
          setMatches(matchesData);
          setIsLoading(false);
        } catch (err) {
          console.error("Error fetching matches:", err);
          setError("Failed to fetch matches. Please try again.");
          setIsLoading(false);
        }
      } else {
        setError("Please install MetaMask to use this feature.");
        setIsLoading(false);
      }
    };

    fetchMatches();
  }, []);

  const getMatchStatus = (startTime, endTime) => {
    const now = Date.now() / 1000;
    if (now < startTime) {
      return 'Upcoming';
    } else if (now >= startTime && now < endTime) {
      return 'In Progress';
    } else {
      return 'Completed';
    }
  };

  const updatedMatches = matches.map(match => ({
    ...match,
    status: getMatchStatus(match.startTime, match.endTime)
  }));

  const filteredMatches = updatedMatches.filter(match => match.status === activeButton);

  if (isLoading) return <div className="text-white text-center mt-20">Loading matches...</div>;
  if (error) return <div className="text-red-500 text-center mt-20">{error}</div>;

  return (
    <div className='w-full bg-black text-gGlow pt-24 px-20 flex flex-col items-center'>
      <div className="top-bar flex justify-between w-[80vw] px-6">
        <h1 className='text-4xl'>FootBall LEAGUES</h1>
      </div>

      <div className='bg-[#1D1D1D] w-[80vw] mt-5 rounded-3xl gap-3 flex flex-col pr-4'>
        <ProgressBar 
          activeButton={activeButton} 
          setActiveButton={setActiveButton} 
          currentDate={currentDate} 
          setCurrentDate={setCurrentDate} 
        />
        <div className='label-div flex justify-between px-7 mt-4 text-2xl text-white'>
          <h1>Action</h1>
          <h1>Matches</h1>  
          <h1>Date</h1>
          <h1>Time</h1>
          <h1>Status</h1>
        </div>

        <h1 className='text-2xl relative px-4 mt-2 text-gGlow'>Premier League</h1>

        {filteredMatches.map((match, index) => (
          <MatchesHoverCard key={index} match={match} />
        ))}
      </div>
    </div>
  );
}