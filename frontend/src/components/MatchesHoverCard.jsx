import React from 'react';
import { Tooltip } from "@nextui-org/react";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MatchesHoverCard = ({ match }) => {
  const {
    id,
    competition1,
    competition2,
    score,
    date,
    time,
    stadium,
  } = match;
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="mycard border-b border-white hover:border-b-gGlow transition-all duration-300 cursor-pointer hover:bg-gray-900 text-white flex flex-col sm:flex-row justify-between items-center py-3 sm:py-4 px-2 sm:px-4 space-y-2 sm:space-y-0 sm:space-x-2">
        <div 
          onClick={() => navigate(`/footballgame/${id}`)} 
          className="mycard-1 underline text-xs sm:text-sm hover:text-gGlow duration-300 text-center sm:text-left"
        >
          <p>Create<br className="hidden sm:inline" /> Team</p>
        </div>
 
        <div className="mycard-3 vs-div flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2">
          <div className="1st-comp flex items-center space-x-1">
            <Tooltip content={competition1.name}>
              <h1 className="text-xs sm:text-sm truncate max-w-[80px] sm:max-w-[120px]">{competition1.name}</h1>
            </Tooltip>
            <img className="h-4 sm:h-6 w-auto" src={competition1.image} alt={competition1.name} />
          </div>
          <span className="text-xs sm:text-sm">vs</span>
          <div className="2nd-comp flex items-center space-x-1">
            <img className="h-4 sm:h-6 w-auto" src={competition2.image} alt={competition2.name} />
            <Tooltip content={competition2.name}>
              <h1 className="text-xs sm:text-sm truncate max-w-[80px] sm:max-w-[120px]">{competition2.name}</h1>
            </Tooltip>
          </div>
        </div>

        <div className="mycard-4 score-div text-xs sm:text-sm">
          {score}
        </div>

        <div className="mycard-5 date-div text-xs sm:text-sm hidden sm:block">
          {date}
        </div>

        <div className="mycard-5 time-div text-xs sm:text-sm hidden md:block">
          {time}
        </div>

        <div className="mycard-5 stadium-div text-xs sm:text-sm hidden lg:block truncate max-w-[100px]">
          {stadium}
        </div>
      </div>
    </div>
  );
};

export default MatchesHoverCard;