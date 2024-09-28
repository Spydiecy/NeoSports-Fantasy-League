import React, { useState, useEffect } from 'react';
import { Select, SelectItem } from "@nextui-org/react";
import MatchesHoverCard from '../components/MatchesHoverCard';
import ProgressBar from '../components/ProgressBar';
import IPL_data from "./IPL_data";
export default function IPL() {
  const [matches, setMatches] = useState([]);

  // Fetch function to get match data


  return (
    <div className=' w-full bg-black text-gGlow pt-24 px-20 flex flex-col items-center'>
      <div className="top-bar flex justify-between w-[80vw] px-6">
        <h1 className='text-4xl'>IPL LEAGUES</h1>

        <Select
          items={[]}  // Update with relevant items or remove if not needed
          placeholder="Leagues"
          className="max-w-xs border- border-gGlow rounded-2xl"
        >
          {(item) => <SelectItem key={item.label}>{item.label}</SelectItem>}
        </Select>
      </div>

      <div className='bg-[#1D1D1D] w-[80vw]  mt-5 rounded-3xl gap-3 flex flex-col pr-4'>
        <ProgressBar />
        <div className='label-div flex justify-between px-7 mt-4 text-2xl text-white'>
          <h1>Action</h1>
          <h1>Matches</h1>
          <h1>Date</h1>
          <h1>Time</h1>
          <h1>Location</h1>
        </div>

        <h1 className='text-2xl relative px-4 mt-2 text-gGlow'>Premier League</h1>

        {/* Mapping through the fetched matches data */}
        {IPL_data.length > 0 ? (
          IPL_data.map((match, index) => (
            <MatchesHoverCard key={index} match={match} />
          ))
        ) : (
          <p className="text-white text-center mt-4">Loading matches...</p>
        )}
      </div>
    </div>
  );
}
