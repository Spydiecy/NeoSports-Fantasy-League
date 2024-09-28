import React from 'react'

const Navbar = () => {
  return (
    <div className='border-2 font-amy border-black flex justify-between mt-6'>
        <div className="left-part border-2 border-black">
            <img className='h-20' src="https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/Compressed/logo/logo.png" alt="" />
        </div>
        <div className="right-part border-2 border-black flex flex-col">
            <ul className='right-list flex flex-row pr-11 gap-4 m-4 p-2 rounded-2xl border-2 border-green-700 bg-[#0C0C19] text-white'>
                <li>Matches</li>
                <li>Rewards Calculator</li>
                <li>Leagues</li>
                <li>Gameplay Rules</li>
                <li>
                    <button>Join Discord</button>
                </li>
                <li>CONNECT</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar