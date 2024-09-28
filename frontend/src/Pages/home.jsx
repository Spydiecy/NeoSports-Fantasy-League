import React from 'react';
import homebg from '../assets/homebg.jpg'; 

export default function Home() {
  return (
    <div className='h-[100vh] w-[98vw] bg-black '>
    <div className='w-[98.9vw] h-[100vh]' style={{
      backgroundImage: `url(${homebg})`, 
      backgroundSize: 'cover',           
      backgroundPosition: 'center',      
                        
    }}>
    </div>
    </div>
  );
}
