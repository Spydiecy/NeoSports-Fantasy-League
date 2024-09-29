"use client";

import React, { useState } from 'react';
import { animals } from './data'; // Assuming this is correct
import { Select, SelectItem } from '@nextui-org/react';
import MatchesHoverCard from '../components/MatchesHoverCard';
import ProgressBar from '../components/ProgressBar';
import Football_Data from './Football_data'; // Import your match data

// Helper function to determine match status based on current time
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

export default function Matches() {
  const [activeButton, setActiveButton] = useState('Upcoming');
  const [currentDate, setCurrentDate] = useState(new Date());

  // Update match statuses
  const updatedMatches = Football_Data.map(match => ({
    ...match,
    status: getMatchStatus(match)
  }));

  // Filter the matches based on the activeButton status
  const filteredMatches = updatedMatches.filter(match => match.status === activeButton);

  return (
    <div className='min-h-[200vh] w-full bg-black text-gGlow pt-40 px-20 flex flex-col items-center'>
      <div className='top-bar flex justify-between w-[80vw] px-6'>
        <h1 className='text-4xl'>Matches</h1>

    
      </div>

      <div className='bg-[#1D1D1D] w-[80vw] h-[160vh] mt-5 rounded-3xl gap-3 flex flex-col pr-4'>
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

        {filteredMatches.map((match, index) => (
          <MatchesHoverCard key={index} match={match} />
        ))}
      </div>
    </div>
  );
}