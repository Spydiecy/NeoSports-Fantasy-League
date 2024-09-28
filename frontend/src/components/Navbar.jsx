import React from 'react'
import { Link } from 'react-router-dom'
import Component from './dropDownleague'
// import discord from "../../src/assets/fantasyextreme.org/media.api-sports.io/i";
const Navbar = () => {
  return (
    <div className='  flex absolute gap-[30vw] top-3 gap-x-[40vw]  justify-between'>
        <div className="left-part">
            <img className='h-20 pl-4 ' src="https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/Compressed/logo/logo.png" alt="" />
        </div>
        <div className="right-part flex flex-col">
            <ul className='right-list flex flex-row pr-11 gap-4 m-4 p-2 rounded-2xl border-[0.1vw]     border-[#68ed94]  bg-[#0C0C19] text-white text-sm justify-center items-center '>
                <li className='cursor-pointer hover:text-gGlow transition-all duration-1000 '>Matches</li>
                {/* <Link to="/gameplayrules"> */}
                <li  className='cursor-pointer hover:text-gGlow transition-all duration-1000 '>Rewards Calculator</li>
                {/* </Link> */}
                
                <li className='cursor-pointer hover:text-gGlow transition-all duration-1000 '><Component></Component></li>
                <li className='cursor-pointer hover:text-gGlow transition-all duration-1000 '>Gameplay Rules</li>
                <li >
                    <button className='border-white border-2 p-[0.2vw] rounded-xl '>JOIN DISCORD</button>
                </li>
        

                <li className=''> <button className='border-white bg-white border-2 p-1 rounded-xl text-black  px-4 '>CONNECT</button></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar