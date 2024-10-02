import React from 'react';
import { Tooltip } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';

const MatchesHoverCard = ({ match }) => {
  const navigate = useNavigate();

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString();
  };

  return (
    <div className="w-full">
      <div className="mycard border-b border-white hover:border-b-gGlow transition-all duration-300 cursor-pointer hover:bg-gray-900 text-white flex flex-col sm:flex-row justify-between items-center py-3 sm:py-4 px-2 sm:px-4 space-y-2 sm:space-y-0 sm:space-x-2">
        <div
          onClick={() => navigate(`/footballgame/${match.id}`)}
          className="mycard-1 underline text-xs sm:text-sm hover:text-gGlow duration-300 text-center sm:text-left"
        >
          <p>Create<br className="hidden sm:inline" /> Team</p>
        </div>

        <div className="mycard-3 vs-div flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2">
          <Tooltip content="Match ID">
            <h1 className="text-xs sm:text-sm truncate max-w-[80px] sm:max-w-[120px]">Match {match.id}</h1>
          </Tooltip>
        </div>

        <div className="mycard-5 date-div text-xs sm:text-sm hidden sm:block">
          {formatDate(match.startTime)}
        </div>

        <div className="mycard-5 time-div text-xs sm:text-sm hidden md:block">
          {formatTime(match.startTime)}
        </div>

        <div className="mycard-5 stadium-div text-xs sm:text-sm hidden lg:block truncate max-w-[100px]">
          {match.isFinished ? 'Completed' : 'Upcoming'}
        </div>
      </div>
    </div>
  );
};

export default MatchesHoverCard;