import React from 'react'

const ScrollCard = ({match}) => {
    // console.log("my props are::::::",props);
    // const {match}=props;
    
  return (
    <div  className='overflow-x-hidden'><div className="1st-card-div border-2 pb-10 pt-5 px-8 h-full rounded-xl bg-[#3A3A3A] border-gray-500 cursor-pointer w-[25vw]" >
    <div className="text-white text-lg font-bold mb-2">{match.date}</div>
    <div className="flex justify-between items-center mb-4">
      <div className="flex  flex-col items-center justify-center">
        <img src={match.homeLogoUrl} alt={match.homeTeam} className="w-8 h-8 mr-2" />
       
        <span className="text-white">{match.homeTeam}</span>
      </div>
      <div className="text-2xl font-bold text-white">
        {" "}{match.homeScore} - {match.awayScore}{"  "}
      </div>
      <div className="flex items-center justify-center flex-col">
        <img src={match.awayLogoUrl} alt={match.awayTeam} className="w-8 h-8 ml-2" />
        <span className="text-white">{match.awayTeam}</span>
      </div>
    </div>
    <div className="text-gray-400 text-sm">{match.stadium}</div>
    </div>  
    </div>
  )
}

export default ScrollCard