import React from 'react';
import Democard from '../democards/Democard';
import football from '../../assets/football.png';
import ResultsCard from '../ResultsCard/ResultsCard';

export default function Demo() {
    const cards = [
        { id: 1, title: 'Match 1', content: 'Team A 2 - 1 Team B' },
        { id: 2, title: 'Match 2', content: 'Team C 0 - 0 Team D' },
        { id: 3, title: 'Match 3', content: 'Team E 3 - 2 Team F' },
        { id: 4, title: 'Match 4', content: 'Team G 1 - 1 Team i' },
        { id: 5, title: 'Match 5', content: 'Team G 1 - 1 Team j' },
        { id: 6, title: 'Match 6', content: 'Team G 1 - 1 Team k' },
      ];
  return (
    <div className='bg-black'>
      <div className='headings'>
        <h1 className='text-4xl flex justify-center pt-10'>Demo</h1>
        <p className='flex justify-center text-base pt-2'>
          Click to watch the complete demo and experience the thrill of strategic team management in Fantasy Extreme—where every decision counts!
        </p>
      </div>

      <div className='cards'>
        <h1 className='text-4xl flex justify-center pt-20'>
          HOW IT <span className='text-[#00F654]'>WORKS</span>
        </h1>
        <Democard />
      </div>
      <div className='history flex justify-center'>
        <div
          className="h-[52vh] relative w-[85vw] bg-[#3a3a3a] rounded-3xl p-6
                     transition-all duration-300 ease-in-out
                     before:rounded-xl before:transition-all
                     before:duration-300 before:ease-in-out
                     before:opacity-0 hover:before:opacity-100
                     before:shadow-[0_0_15px_rgba(0,246,84,0.5)]
                     before:hover:shadow-[0_0_20px_rgba(0,246,84,0.7)] flex mt-[10vw]"
        >
          <img
            src={football}
            alt="Football History"
            className="absolute bottom-0 left-0 h-[44vh] w-[22vw] rounded"
          />
          <div className="relative z-10 text-white flex flex-col justify-between flex-1 p-6">
            <div className="flex flex-col items-end mb-4">
              <h2 className="text-2xl font-bold text-right"></h2>
              <h3 className="text-4xl font-semibold text-right">About <span className='text-[#00F654]'>Fantasy</span></h3>
            </div>
            <p className="text-base mr-0 w-[55vw] ml-[25vw] text-right">
              Take your love for soccer to the next level with fantasy football. Build your own virtual dream team by drafting real footballers. Their performances on the pitch - goals scored, assists made, clean sheets kept - translate into points for your team. You'll compete against friends or online leagues, strategizing your picks, managing injuries, and watching your team rack up. It's a fun and engaging way to experience the beautiful game, combining the thrill of real-world soccer with the challenge of building and managing your own champion squad.
            </p>
            <button className="bg-white h-[20vh] text-black border border-black 
                hover:bg-black hover:text-[#00F654] hover:border-[#00F654] ml-[68vw] mt-[1vw]
                transition duration-300 ease-in-out 
                rounded-xl">
  PLAY NOW
</button>


          </div>
        </div>
      </div>
      <div className='history flex justify-center'>
        <div
        className="h-[50vh] mb-[3vh] w-[85vw] rounded-2xl bg-[#1d1d1d] p-6
             transition-all duration-300 ease-in-out
             hover:relative
             before:rounded-xl before:transition-all
             before:duration-300 before:ease-in-out
             before:opacity-0 hover:before:opacity-100
             before:shadow-[0_0_15px_rgba(0,246,84,0.5)]
             before:hover:shadow-[0_0_20px_rgba(0,246,84,0.7)]
             flex mt-[10vw]
             bg-gradient-to-r from-[#1d1d1d00] via-[#1d1d1d] to-[#615e5e]"
        >
     
          <div className="relative  z-10 text-white flex flex-col justify-between flex-1 p-6">
            <div className="flex flex-col items-center  mb-4">
              <h2 className="text-3xl font-bold ">LATEST <span className='text-[#00F654]'>RESULTS</span></h2>

            </div>
            <div className='cards'>
                <ResultsCard/>
            </div>
          



          </div>
        </div>
      </div>
      
    </div>
    
  );
}
