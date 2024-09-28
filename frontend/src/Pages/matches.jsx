import React from 'react';
import homebg from '../assets/homebg.jpg';
import Demo from '../Components/DemoSection/Demo';
import {animals} from "./data";
import {Select, SelectItem} from "@nextui-org/react";
import MatchesHoverCard from '../components/MatchesHoverCard';


export default function Matches() {
  return (
    <div className='min-h-[100vh] w-full bg-black text-gGlow pt-40 px-20 flex flex-col items-center'>
      <div className="top-bar  flex justify-between w-[80vw]   px-6">

      <h1 className='text-4xl'>
    Matches
      </h1>
     

      <Select
      items={animals}
      placeholder="Leagues"
      className="max-w-xs border- border-gGlow rounded-2xl"
      >
      {(animal) => <SelectItem>{animal.label}</SelectItem>}
    </Select>
        </div>
        
        <div className='bg-[#1D1D1D] w-[80vw] h-[90vh] mt-5 rounded-3xl gap-3 flex flex-col pr-4 '>
        <div className='label-div flex justify-between px-7 mt-4 text-2xl text-white'>
        <h1>Action</h1>
        <h1>Matches</h1>
        <h1>Date</h1>
        <h1>Time</h1>
        <h1>Location</h1>
</div>
        <h1 className='text-2xl relative px-4 mt-2 text-gGlow'>Premier League</h1>
            
          <MatchesHoverCard></MatchesHoverCard>
          <MatchesHoverCard></MatchesHoverCard>
          <MatchesHoverCard></MatchesHoverCard>
        </div>


    </div>
  );
}
