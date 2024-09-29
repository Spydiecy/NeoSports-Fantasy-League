"use client"

import { useState, useEffect } from 'react'

export default function FantasyExtremeRules() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-4 overflow-x-hidden pt-34">
      <div className={`max-w-full mx-auto transition-all duration-1000 ${animate ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-3xl font-bold text-green-500 mb-4 animate-pulse">FANTASY EXTREME GAMEPLAY RULES</h1>
        <p className="mb-4">We are providing a comprehensive guide on how you can become a manager and enter the contests on Fantasy Extreme. Please refer to the below guidelines.</p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li className="text-green-400">Create your virtual team</li>
          <li className="text-green-400">Select 3 forwards, 5 midfielders, 5 defenders, and 2 goalkeepers, in order to complete your team selection.

</li>
          <li className="text-green-400">Join the contest</li>
          <li className="text-green-400">Manage the team during the match</li>
          <li className="text-green-400">Get instant updates on your team's status as the contest concludes</li>
          <li className="text-green-400">Win instant rewards at the end of each match</li>
        </ul>
        <p className="mb-6">Follow these steps to enhance your Fantasy Extreme experience and lead your team to victory!</p>

        <div className={`bg-gray-900 rounded-lg p-6 transition-all duration-500 ${animate ? 'shadow-[0_0_15px_rgba(0,255,0,0.5)]' : ''}`}>
          <StatSection title="Shots" stats={[
            { name: "Total Shots", value: 1 },
            { name: "Shots On Goal", value: 2 },
          ]} />
          <StatSection title="Goals" stats={[
            { name: "Goals Scored", value: 5 },
            { name: "Goals Conceded", value: -2 },
            { name: "Goals Assists", value: 3 },
            { name: "Goals Overruled", value: -3 },
          ]} />
          <StatSection title="Fouls" stats={[
            { name: "Fouls Drawn", value: 1 },
            { name: "Fouls Committed", value: -1 },
          ]} />
          <StatSection title="Cards" stats={[
            { name: "Cards Yellowcards", value: -3 },
            { name: "Cards Redcards", value: -5 },
          ]} />
          <StatSection title="Passing" stats={[
            { name: "Passing Total Crosses", value: 2 },
            { name: "Passing Crosses Accuracy", value: "2 Per > 30% < 70% & 5 Per > 70%" },
            { name: "Passing Passes", value: 1 },
            { name: "Passing Accurate Passes", value: 2 },
            { name: "Passing Passes Accuracy", value: "3 Per > 30% < 70% & 5 Per > 70%" },
            { name: "Passing Key Passes", value: 2 },
          ]} />
          <StatSection title="Dribbles" stats={[
            { name: "Dribbles Attempts", value: "1 Per / Attempt" },
            { name: "Dribbles Success", value: 3 },
            { name: "Dribbles Dribbled Past", value: 2 },
          ]} />
          <StatSection title="Duels" stats={[
            { name: "Duels Won", value: 2 },
          ]} />
          <StatSection title="Other" stats={[
            { name: "Aerials Won", value: 3 },
            { name: "Offsides", value: 4 },
            { name: "Saves", value: 2 },
            { name: "Inside Box Saves", value: 3 },
            { name: "Pen Scored", value: 7 },
            { name: "Pen Missed", value: -3 },
            { name: "Pen Saved", value: 7 },
            { name: "Pen Won", value: 2 },
            { name: "Hit Woodwork", value: 3 },
            { name: "Tackles", value: 3 },
            { name: "Blocks", value: 2 },
            { name: "Interceptions", value: 3 },
            { name: "Clearances", value: "1 Per /" },
            { name: "Dispossesed", value: -1 },
            { name: "Minutes Played", value: "0.1 Per > 60 < 2" },
          ]} />
        </div>
      </div>
    </div>
  )
}

function StatSection({ title, stats }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold text-green-500 mb-2">{title}</h2>
      <div className="grid grid-cols-2 gap-2">
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-between bg-gray-800 p-2 rounded">
            <span>{stat.name}</span>
            <span className="font-bold">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}