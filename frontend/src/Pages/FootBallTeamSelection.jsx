import React, { useState, useEffect } from 'react'
import pitch from '../assets/pitch.png'
import player from '../assets/player.png'
import { X, Youtube, Facebook, Linkedin, Music, Search, ChevronDown } from 'lucide-react'

export default function FootballTeamSelection() {
  const [budget, setBudget] = useState(140)
  const [selectedPlayers, setSelectedPlayers] = useState([])
  const [formation, setFormation] = useState('3-4-3')
  const [activeTab, setActiveTab] = useState('Goalkeeper')
  const [searchTerm, setSearchTerm] = useState('')

  const positions = [
    { name: 'Goalkeeper', limit: 1 },
    { name: 'Defender', limit: 3 },
    { name: 'Midfielder', limit: 4 },
    { name: 'Forward', limit: 3 },
  ]

  const players = [
    { id: 1, name: 'Li Yuefeng', team: 'Tianjin Teda', price: 10, number: 1, position: 'Goalkeeper' },
    { id: 2, name: 'Zhang Linpeng', team: 'Guangzhou Evergrande', price: 15, number: 5, position: 'Defender' },
    { id: 3, name: 'Wu Xi', team: 'Jiangsu Suning', price: 12, number: 8, position: 'Midfielder' },
    { id: 4, name: 'Wu Lei', team: 'Shanghai SIPG', price: 20, number: 7, position: 'Forward' },
    // Add more players as needed
  ]

  const addPlayer = (player) => {
    if (selectedPlayers.length < 11 && 
        selectedPlayers.filter(p => p.position === player.position).length < positions.find(pos => pos.name === player.position).limit &&
        budget >= player.price) {
      setSelectedPlayers([...selectedPlayers, player])
      setBudget(budget - player.price)
    }
  }

  const removePlayer = (player) => {
    setSelectedPlayers(selectedPlayers.filter(p => p.id !== player.id))
    setBudget(budget + player.price)
  }

  const resetSelection = () => {
    setSelectedPlayers([])
    setBudget(140)
  }

  const getPlayerPosition = (position, index) => {
    const positionMap = {
      Goalkeeper: [{ top: '85%', left: '50%' }],
      Defender: [
        { top: '70%', left: '20%' },
        { top: '70%', left: '50%' },
        { top: '70%', left: '80%' },
      ],
      Midfielder: [
        { top: '50%', left: '20%' },
        { top: '50%', left: '40%' },
        { top: '50%', left: '60%' },
        { top: '50%', left: '80%' },
      ],
      Forward: [
        { top: '30%', left: '30%' },
        { top: '30%', left: '50%' },
        { top: '30%', left: '70%' },
      ],
    }
    return positionMap[position][index] || { top: '50%', left: '50%' }
  }

  return (
    <div className="relative min-h-screen bg-black text-white">
      <img src={pitch} alt="Football pitch" className="w-full h-full object-cover absolute" />
      
      {/* Top banner */}
      <div className="absolute top-0 left-0 right-0 bg-gray-800 bg-opacity-80 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/placeholder.svg?height=50&width=50" alt="Team 1 logo" className="w-12 h-12" />
          <span className="text-2xl font-bold">VS</span>
          <img src="/placeholder.svg?height=50&width=50" alt="Team 2 logo" className="w-12 h-12" />
        </div>
        <div className="flex items-center space-x-8">
          <div>
            <div className="text-sm">BUDGET</div>
            <div className="text-3xl font-bold">{budget}</div>
          </div>
          <div>
            <div className="text-sm">SELECTED PLAYERS</div>
            <div className="text-3xl font-bold">{selectedPlayers.length}</div>
          </div>
        </div>
        <div className="flex space-x-2">
          <X className="w-6 h-6" />
          <Youtube className="w-6 h-6" />
          <Facebook className="w-6 h-6" />
          <Linkedin className="w-6 h-6" />
          <Music className="w-6 h-6" />
        </div>
      </div>

      {/* Player selection controls */}
      <div className="absolute bottom-4 left-4 right-4 bg-gray-800 bg-opacity-80 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl font-bold">Player Selection</div>
          <div className="flex items-center space-x-4">
            <select 
              value={formation} 
              onChange={(e) => setFormation(e.target.value)}
              className="bg-gray-700 text-white rounded px-2 py-1"
            >
              <option>3-4-3</option>
              <option>4-3-3</option>
              <option>4-4-2</option>
            </select>
            <button onClick={resetSelection} className="bg-gray-700 text-white px-4 py-1 rounded">Reset</button>
            <button className="bg-gray-700 text-white px-4 py-1 rounded">Back</button>
            <button className="bg-white text-black px-4 py-1 rounded">Next</button>
          </div>
        </div>

        <div className="flex mb-4">
          <div className="flex-1 bg-green-500 p-2 rounded-l">Player Selection</div>
          <div className="flex-1 bg-gray-700 p-2 rounded-r">Substitute Selection</div>
        </div>

        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search for players..."
            className="w-full bg-gray-700 text-white p-2 pl-10 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" />
        </div>

        <div className="flex space-x-4 mb-4">
          {positions.map(position => (
            <button
              key={position.name}
              className={`flex-1 p-2 rounded ${activeTab === position.name ? 'bg-green-500' : 'bg-gray-700'}`}
              onClick={() => setActiveTab(position.name)}
            >
              {position.name} {selectedPlayers.filter(p => p.position === position.name).length}/{position.limit}
            </button>
          ))}
        </div>

        <table className="w-full">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-2 text-left">STATUS</th>
              <th className="p-2 text-left">NAME</th>
              <th className="p-2 text-left">TEAM NAME</th>
              <th className="p-2 text-left">PRICE</th>
              <th className="p-2 text-left">PLAYER NO.</th>
            </tr>
          </thead>
          <tbody>
            {players
              .filter(player => 
                player.position === activeTab && 
                (player.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                 player.team.toLowerCase().includes(searchTerm.toLowerCase()))
              )
              .map(player => (
                <tr key={player.id} className="border-b border-gray-700">
                  <td className="p-2">
                    <button
                      onClick={() => addPlayer(player)}
                      className="bg-green-500 text-white px-2 py-1 rounded"
                      disabled={selectedPlayers.some(p => p.id === player.id) || budget < player.price}
                    >
                      {selectedPlayers.some(p => p.id === player.id) ? 'Selected' : 'Add'}
                    </button>
                  </td>
                  <td className="p-2">{player.name}</td>
                  <td className="p-2">{player.team}</td>
                  <td className="p-2">{player.price}</td>
                  <td className="p-2">{player.number}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Selected players on pitch */}
      {selectedPlayers.map((player, index) => {
        const position = getPlayerPosition(player.position, selectedPlayers.filter(p => p.position === player.position).indexOf(player))
        return (
          <div
            key={player.id}
            className="absolute"
            style={{
              top: position.top,
              left: position.left,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <img src={player} alt={player.name} className="w-12 h-12" />
            <button
              onClick={() => removePlayer(player)}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
              aria-label={`Remove ${player.name}`}
            >
              <X className="w-3 h-3" />
            </button>
            <div className="text-xs mt-1 text-center bg-black bg-opacity-50 rounded px-1">
              {player.name}
            </div>
          </div>
        )
      })}
    </div>
  )
}