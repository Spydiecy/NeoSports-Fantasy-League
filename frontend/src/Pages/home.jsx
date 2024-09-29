import React from 'react';
import homebg from '../assets/homebg.jpg';
import Demo from '../components/DemoSection/Demo';
import Videoplayer from '../components/VideoPlayer/Videoplayer';

export default function Home() {
  return (
    <div className='min-h-[100vh] w-full bg-black -z-50'>
      <div
        className='relative mt-[-11vh] w-full h-[100vh] bg-black'
        style={{
          backgroundImage: `url(${homebg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom ',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for darkening the background */}
        <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm" />

        {/* Text and button section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300 text-center">
          <h1 className="text-6xl font-bold mb-4 animate-pulse">
            Neo Sports Fantasy League
          </h1>
          <p className="text-xl mb-8 max-w-2xl text-white animate-fade-in">
            Experience the future of fantasy sports with cutting-edge technology and immersive gameplay. Join now and dominate the league!
          </p>
          <button className="join-button bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
            Join League
          </button>
        </div>
      </div>

      {/* Demo Section */}
      <div className="bg-black text-white">
        <Demo />
        
      </div>
      

    </div>
  );
}
