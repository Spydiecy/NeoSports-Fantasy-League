import React, { useState, useEffect } from 'react';
import { Select, SelectItem } from "@nextui-org/react";
import MatchesHoverCard from '../components/MatchesHoverCard';
import ProgressBar from '../components/ProgressBar';
import IPL_data from "./IPL_data";
export default function IPL() {
  const [matches, setMatches] = useState([]);
  const [activeButton, setActiveButton] = useState('Upcoming');
  const [currentDate, setCurrentDate] = useState(new Date());

  // Fetch function to get match data
  const getMatchStatus = (match) => {
    const now = new Date();
    const matchDate = new Date(`${match.date} ${match.time}`);
    
    if (matchDate > now) {
      return 'Upcoming';
    } else if (matchDate <= now && now < new Date(matchDate.getTime() + 2 * 60 * 60 * 1000)) { // Assuming a match lasts 2 hours
      return 'In Progress';
    } else {
      return 'Completed';
    }
  };
  const updatedMatches = IPL_data.map(match => ({
    ...match,
    status: getMatchStatus(match)
  }));
  const filteredMatches = updatedMatches.filter(match => match.status === activeButton);
  return (
    
    
    <div className=' w-full bg-black text-gGlow pt-24 px-20 flex flex-col items-center'>
      <div className="top-bar flex justify-between w-[80vw] px-6">
        <h1 className='text-4xl'>IPL LEAGUES</h1>

    
      </div>

      <div className='bg-[#1D1D1D] w-[80vw]  mt-5 rounded-3xl gap-3 flex flex-col pr-4'>
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
          <h1>Location</h1>
        </div>

        <h1 className='text-2xl relative px-4 mt-2 text-gGlow'>Premier League</h1>

        {filteredMatches.map((match, index) => (
          <MatchesHoverCard key={index} match={match} />
        ))}
      </div>
    </div>
  );
}
