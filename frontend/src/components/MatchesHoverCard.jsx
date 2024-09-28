import React from 'react'
import {Tooltip, Button} from "@nextui-org/react";
const MatchesHoverCard = () => {
  return (
    <div> <div className="mycard border-b-2 text-white border-white flex justify-evenly  w-full h-20 items-center hover:border-b-gGlow transition-all duration-1000 cursor-pointer hover:bg-gray-900 ">
    <div className="mycard-1 underline text-sm hover:text-gGlow duration-700">Create <br /> Team</div>
    <div className="mycard-2 underline text-sm hover:text-gGlow duration-700">View <br /> Contests</div>
    <div className="mycard-3 vs-div flex gap-5   justify-center items-center">
          <div className="1st-comp flex gap-1 justify-center items-center">
          <Tooltip content="Everton">

            <h1>Everton</h1>
            </Tooltip>
            <img className='h-10' src="https://media.api-sports.io/football/teams/45.png" alt="" />
          </div>
          vs
          <div className="1st-comp flex gap-1 justify-center items-center">
            <img className='h-10' src="https://media.api-sports.io/football/teams/52.png" alt="" />
              <Tooltip content="Crystal Space">

            <h1>Crystal Space</h1>
            </Tooltip>
          </div>
    </div>
    <div className="mycard-4 date-div">Sep 28,24</div>
    <div className="mycard-5">7:30PM</div>
    <div className="mycard-5">Goodison Park,Livepool</div>
  </div></div>
  )
}

export default MatchesHoverCard