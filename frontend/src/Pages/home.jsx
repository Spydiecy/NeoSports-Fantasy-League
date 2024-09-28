import React from 'react';
import homebg from '../assets/homebg.jpg'; 

export default function Home() {
  return (
    <div className='h-[100vh] w-full bg-black '>
    <div className='w-full h-[99.5vh]' style={{
      backgroundImage: `url(${homebg})`, 
      backgroundSize: 'cover',           
      backgroundPosition: 'center',      
                        
    }}>
    </div>
    </div>
  );
}
