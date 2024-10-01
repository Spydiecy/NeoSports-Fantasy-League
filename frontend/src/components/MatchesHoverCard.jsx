import React from 'react';
import { Tooltip } from "@nextui-org/react";
import { Navigate, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const MatchesHoverCard = ({ match}) => {
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
    <div>
      <div className="mycard border-b-2 text-white border-white flex justify-evenly w-full h-20 items-center hover:border-b-gGlow transition-all duration-1000 cursor-pointer hover:bg-gray-900">
        <div onClick={()=>{
          navigate(`/footballgame/${id}`);
        }} className="mycard-1 underline text-sm hover:text-gGlow duration-700">
          <p>Create <br /> Team</p>
        </div>
 
        <div className="mycard-3 vs-div flex gap-5 justify-center items-center">
          <div className="1st-comp flex gap-1 justify-center items-center">
            <Tooltip content={competition1.name}>
              <h1>{competition1.name}</h1>
            </Tooltip>
            <img className="h-6" src={competition1.image} alt={competition1.name} />
          </div>
          vs
          <div className="2nd-comp flex gap-1 justify-center items-center">
            <img className="h-6" src={competition2.image} alt={competition2.name} />
            <Tooltip content={competition2.name}>
              <h1>{competition2.name}</h1>
            </Tooltip>
          </div>
        </div>
        <div className="mycard-4 score-div">
          {score}
        </div>
        <div className="mycard-5 date-div">
          {date}
        </div>
        <div className="mycard-5 time-div">
          {time}
        </div>
        <div className="mycard-5 stadium-div">
          {stadium}
        </div>
      </div>
    </div>
  );
};

export default MatchesHoverCard;
