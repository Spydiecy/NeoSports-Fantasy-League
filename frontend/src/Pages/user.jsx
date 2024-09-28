import React from 'react'
import { useState } from "react"
const User = () => {
    const [userId, setUserId] = useState("0x1234...5678")

  const changeUserId = () => {
    setUserId("0x" + Math.random().toString(16).slice(2, 10) + "..." + Math.random().toString(16).slice(2, 6))
  }
  return (
 
        <div className="min-h-screen bg-gray-black text-white p-8 h-[240vh] bg-black pt-44">
      <div className="max-w-2xl mx-auto bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">User Profile</h1>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">User Address</h2>
              <p className="text-gray-400">{userId}</p>
            </div>
            <button
              onClick={changeUserId}
              className="px-4 py-2 bg-transparent text-green-400 font-bold rounded-lg 
                         border border-green-400 
                         transition-all duration-300 ease-in-out
                         hover:shadow-[0_0_10px_#4ade80] hover:border-green-300 hover:text-green-300"
            >
              Change User ID
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <StatCard title="Total Participated Contests" value="42" />
            <StatCard title="Leaderboard Position" value="#7" />
            <StatCard title="Total Contest Wins" value="15" />
            <StatCard title="Total Rewards" value="1,337 ETH" />
          </div>
        </div>
      </div>
      <div className="mb-28 bg-gradient-to-b bg-black w-full to-black p-6">
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-3xl shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">
              <span className="text-white">My</span>
              <span className="text-green-500">Teams</span>
            </h1>
            <div className="flex space-x-4">
              <div className="relative">
                <select className="appearance-none bg-gray-700 text-white px-4 py-2 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>All</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
              <button className="bg-white text-black font-bold px-6 py-2 rounded-lg hover:bg-gray-200 transition duration-300">
                CREATE
              </button>
            </div>
          </div>
          <div className="bg-gray-700 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-5 gap-4 p-4 text-gray-300 font-semibold border-b border-gray-600">
            <div>MATCHES</div>
              <div>CREATED TEAMS</div>
              <div>JOINED TEAMS</div>
              <div>DATE</div>
              <div>ACTION</div>
             
            </div>
            <div className="p-8 text-center text-gray-400">
              No Teams Found
            </div>
          </div>
        </div>
      </div>
    </div>
     

     {/* my transaction history table */}

     <div className=" bg-gradient-to-b  from-gray-900 to-black ">
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-3xl shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">
              <span className="text-white">Transaction</span>
              <span className="text-green-500">History</span>
            </h1>
            <div className="flex space-x-4">
              <div className="relative">
                <select className="appearance-none bg-black text-white px-4 py-2 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>All</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
              <button className="bg-white text-black font-bold px-6 py-2 rounded-lg hover:bg-gray-200 transition duration-300">
                CREATE
              </button>
            </div>
          </div>
          <div className="bg-gray-700 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-5 gap-4 p-4 text-gray-300 font-semibold border-b border-gray-600">
            <div>TITLE</div>
              <div>AMOUNT</div>
              <div>TIME</div>
              <div>DATE</div>
              <div>TIME</div>
            </div>
            <div className="p-8 text-center text-gray-400">
              No Teams Found
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  
  )
}
function StatCard({ title, value }) {
    return (
      <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-400 mb-2">{title}</h3>
        <p className="text-2xl font-bold text-green-600">{value}</p>
      </div>
    )
  }

export default User