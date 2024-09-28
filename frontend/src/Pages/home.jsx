import React from 'react';
import homebg from '../assets/homebg.jpg';
import Demo from '../Components/DemoSection/Demo';

export default function Home() {
  return (
    <div className='min-h-[100vh] w-full bg-black'>
      <div className='w-full h-[100vh] bg-black' style={{
        backgroundImage: `url(${homebg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        
    
      </div>
      <div className="bg-black  text-white">
        <Demo />
      </div>
    </div>
  );
}
