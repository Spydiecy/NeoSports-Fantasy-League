import React from 'react';
import Democard from '../democards/Democard';
import football from '../../assets/football.png';

export default function Demo() {
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
          className="h-[50vh] w-[85vw] bg-[#3a3a3a] rounded-3xl p-6
                     transition-all duration-300 ease-in-out
                     hover:bg-black relative
                     before:absolute before:inset-0
                     before:rounded-xl before:transition-all
                     before:duration-300 before:ease-in-out
                     before:opacity-0 hover:before:opacity-100
                     before:shadow-[0_0_15px_rgba(0,246,84,0.5)]
                     before:hover:shadow-[0_0_20px_rgba(0,246,84,0.7)] flex mt-[10vw]"
        >
          <img
            src={football}
            alt="Football History"
            className="absolute bottom-0 left-0 h-[42vh] w-[22vw] rounded"
          />
          <div className="relative z-10 text-white flex flex-col justify-between flex-1 p-6">
            <div className="flex flex-col items-end mb-4">
              <h2 className="text-2xl font-bold text-right">Our History</h2>
              <h3 className="text-4xl font-semibold text-right">About <span className='text-[#00F654]'>Fantasy</span></h3>
            </div>
            <p className="text-base mr-0 w-[55vw] ml-[25vw] text-right">
              Take your love for soccer to the next level with fantasy football. Build your own virtual dream team by drafting real footballers. Their performances on the pitch - goals scored, assists made, clean sheets kept - translate into points for your team. You'll compete against friends or online leagues, strategizing your picks, managing injuries, and watching your team rack up. It's a fun and engaging way to experience the beautiful game, combining the thrill of real-world soccer with the challenge of building and managing your own champion squad.
            </p>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
}
