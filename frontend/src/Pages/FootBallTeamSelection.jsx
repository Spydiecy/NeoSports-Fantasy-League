import React, { useState, useEffect } from 'react'
import { X, Youtube, Facebook, Linkedin, Music, Search, ChevronDown } from 'lucide-react'
import pitch from '../assets/pitch.png'
import playerImg from '../assets/player.png'
import Footballdata from '../Pages/Football_data'
export default function EnhancedFootballTeamSelection() {
  const [budget, setBudget] = useState(140)
  const [selectedPlayers, setSelectedPlayers] = useState([])
  const [substitutes, setSubstitutes] = useState([])
  const [formation, setFormation] = useState('3-4-3')
  const [activeTab, setActiveTab] = useState('Goalkeeper')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectionMode, setSelectionMode] = useState('main') 
  

  const positions = [
    { name: 'Goalkeeper', limit: 1 },
    { name: 'Defender', limit: 4 },
    { name: 'Midfielder', limit: 4 },
    { name: 'Forward', limit: 3 },
  ]
  const players = [
    { id: 1, name: 'Li Yuefeng', team: 'Tianjin Teda', price: 10, number: 1, position: 'Goalkeeper' },
    { id: 2, name: 'Zhang Linpeng', team: 'Guangzhou Evergrande', price: 15, number: 5, position: 'Defender' },
    { id: 3, name: 'Wu Xi', team: 'Jiangsu Suning', price: 12, number: 8, position: 'Midfielder' },
    { id: 4, name: 'Wu Lei', team: 'Shanghai SIPG', price: 20, number: 7, position: 'Forward' },
    { id: 5, name: 'Yan Junling', team: 'Shanghai SIPG', price: 8, number: 1, position: 'Goalkeeper' },
    { id: 6, name: 'Feng Xiaoting', team: 'Guangzhou Evergrande', price: 14, number: 6, position: 'Defender' },
    { id: 7, name: 'Zheng Zhi', team: 'Guangzhou Evergrande', price: 16, number: 10, position: 'Midfielder' },
    { id: 8, name: 'Elkeson', team: 'Guangzhou Evergrande', price: 22, number: 9, position: 'Forward' },
    { id: 9, name: 'Wang Dalei', team: 'Shandong Luneng', price: 9, number: 1, position: 'Goalkeeper' },
    { id: 10, name: 'Shi Ke', team: 'Shanghai SIPG', price: 13, number: 4, position: 'Defender' },
    { id: 11, name: 'Hao Junmin', team: 'Shandong Luneng', price: 15, number: 11, position: 'Midfielder' },
    { id: 12, name: 'Gao Lin', team: 'Guangzhou Evergrande', price: 18, number: 29, position: 'Forward' },
    { id: 13, name: 'Zeng Cheng', team: 'Guangzhou Evergrande', price: 11, number: 19, position: 'Goalkeeper' },
    { id: 14, name: 'Zhang Chengdong', team: 'Hebei China Fortune', price: 12, number: 17, position: 'Defender' },
    { id: 15, name: 'Cai Huikang', team: 'Shanghai SIPG', price: 14, number: 14, position: 'Midfielder' },
    { id: 16, name: 'Yu Dabao', team: 'Beijing Sinobo Guoan', price: 17, number: 22, position: 'Forward' },
    { id: 17, name: 'Liu Dianzuo', team: 'Guangzhou Evergrande', price: 7, number: 19, position: 'Goalkeeper' },
    { id: 18, name: 'Ren Hang', team: 'Jiangsu Suning', price: 11, number: 23, position: 'Defender' },
    { id: 19, name: 'Zhao Xuri', team: 'Tianjin Quanjian', price: 13, number: 15, position: 'Midfielder' },
    { id: 20, name: 'Xiao Zhi', team: 'Guangzhou R&F', price: 16, number: 9, position: 'Forward' },
    { id: 21, name: 'Zou Zheng', team: 'Guangzhou Evergrande', price: 10, number: 5, position: 'Defender' },
    { id: 22, name: 'Zhang Xizhe', team: 'Beijing Sinobo Guoan', price: 14, number: 10, position: 'Midfielder' },
    { id: 23, name: 'Yang Xu', team: 'Tianjin Tianhai', price: 15, number: 15, position: 'Forward' },
    { id: 24, name: 'Mei Fang', team: 'Guangzhou Evergrande', price: 12, number: 5, position: 'Defender' },
  ]

  const addPlayer = (player) => {
    const targetTeam = selectionMode === 'main' ? selectedPlayers : substitutes
    const setTargetTeam = selectionMode === 'main' ? setSelectedPlayers : setSubstitutes
    const maxPlayers = selectionMode === 'main' ? 11 : 7
    
    if (targetTeam.length < maxPlayers && 
        targetTeam.filter(p => p.position === player.position).length < positions.find(pos => pos.name === player.position).limit &&
        budget >= player.price) {
      setTargetTeam([...targetTeam, player])
      setBudget(budget - player.price)
    }
  }

  const removePlayer = (player, fromSubstitutes = false) => {
    if (fromSubstitutes) {
      setSubstitutes(substitutes.filter(p => p.id !== player.id))
    } else {
      setSelectedPlayers(selectedPlayers.filter(p => p.id !== player.id))
    }
    setBudget(budget + player.price)
  }

  const resetSelection = () => {
    setSelectedPlayers([])
    setSubstitutes([])
    setBudget(140)
  }

  const getPlayerPosition = (position, index, isSubstitute = false) => {
    const positionMap = {
      Goalkeeper: [{ left: isSubstitute ? '95%' : '5%', top: '50%' }],
      Defender: [
        { left: isSubstitute ? '80%' : '20%', top: '20%' },
        { left: isSubstitute ? '80%' : '20%', top: '40%' },
        { left: isSubstitute ? '80%' : '20%', top: '60%' },
        { left: isSubstitute ? '80%' : '20%', top: '80%' },
      ],
      Midfielder: [
        { left: isSubstitute ? '60%' : '40%', top: '20%' },
        { left: isSubstitute ? '60%' : '40%', top: '40%' },
        { left: isSubstitute ? '60%' : '40%', top: '60%' },
        { left: isSubstitute ? '60%' : '40%', top: '80%' },
      ],
      Forward: [
        { left: isSubstitute ? '40%' : '60%', top: '30%' },
        { left: isSubstitute ? '40%' : '60%', top: '50%' },
        { left: isSubstitute ? '40%' : '60%', top: '70%' },
      ],
    }
    return positionMap[position][index] || { left: '50%', top: '50%' }
  }

  const isPlayerSelected = (player) => {
    return selectedPlayers.some(p => p.id === player.id) || substitutes.some(p => p.id === player.id)
  }

  return (
    <div className='h-[170vh]'>

    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-green-800">
        {/* Field lines */}
        <div className="absolute inset-0 border-2 border-white opacity-50" />
        <div className="absolute left-1/2 top-0 bottom-0 w-0 border-l-2 border-white opacity-50" />
        <div className="absolute left-0 right-0 top-1/2 h-0 border-t-2 border-white opacity-50" />
        <div className="absolute left-0 w-[18%] top-[21%] bottom-[21%] border-2 border-white opacity-50" />
        <div className="absolute right-0 w-[18%] top-[21%] bottom-[21%] border-2 border-white opacity-50" />
        <div className="absolute left-0 w-[5%] top-[35%] bottom-[35%] border-2 border-white opacity-50" />
        <div className="absolute right-0 w-[5%] top-[35%] bottom-[35%] border-2 border-white opacity-50" />
        <div className="absolute left-1/2 top-1/2 w-[20%] h-[20%] border-2 border-white opacity-50 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
   
      <div className="absolute left-0 right-0 top-0 bg-gray-800 bg-opacity-80 p-4 flex  justify-between items-center">
      {Footballdata.map((match , index)=>
      {
        <div className="flex items-center space-x-4">
          <img src={`${match.competition1.image}`}    alt={`${match.competition1.name} logo`} className="w-12 h-12" />
          <span className="text-2xl font-bold">VS</span>
          <img src={match.competition2.image}alt="Team 2 logo" className="w-12 h-12" />
        </div>

      })}
       
        <div className="flex items-center space-x-8">
          <div>
            <div className="text-sm">BUDGET</div>
            <div className="text-3xl font-bold">{budget}</div>
          </div>
          <div>
            <div className="text-sm">SELECTED PLAYERS</div>
            <div className="text-3xl font-bold">{selectedPlayers.length}</div>
          </div>
          <div>
            <div className="text-sm">SUBSTITUTES</div>
            <div className="text-3xl font-bold">{substitutes.length}</div>
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
     

      {/* Selected players on pitch */}
      {selectedPlayers.map((player, index) => {
        const position = getPlayerPosition(player.position, selectedPlayers.filter(p => p.position === player.position).indexOf(player))
        return (
          <div
          key={player.id}
          className="absolute"
          style={{
            left: position.left,
            top: position.top,
            transform: 'translate(-50%, -50%)',
          }}
          >
            <img src={playerImg} alt={player.name} className="w-24 h-24 rounded-full " />
            <button
              onClick={() => removePlayer(player)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
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

      {/* Substitute players on pitch */}
      {substitutes.map((player, index) => {
        const position = getPlayerPosition(player.position, substitutes.filter(p => p.position === player.position).indexOf(player), true)
        return (
          <div
            key={player.id}
            className="absolute"
            style={{
              left: position.left,
              top: position.top,
              transform: 'translate(-50%, -50%)',
            }}
            >
            <img src={playerImg} alt={player.name} className="w-24 h-24 rounded-full  opacity-70" />
            <button
              onClick={() => removePlayer(player, true)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
              aria-label={`Remove ${player.name}`}
              >
              <X className="w-3 h-3" />
            </button>
            <div className="text-xs mt-1 text-center bg-black bg-opacity-50 rounded px-1">
              {player.name} (Sub)
            </div>
          </div>
        )
      })}
      
    </div>
    <div className="absolute left-0 right-0 -bottom-[80vh] bg-gray-800 bg-opacity-80 p-4  mb-[10vh]">
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
          <div 
            className={`flex-1 p-2 rounded-l cursor-pointer ${selectionMode === 'main' ? 'bg-green-500' : 'bg-gray-700'}`}
            onClick={() => setSelectionMode('main')}
            >
            Player Selection
          </div>
          <div 
            className={`text-white flex-1 p-2 rounded-r cursor-pointer ${selectionMode === 'substitute' ? 'bg-green-500' : 'bg-gray-700'}`}
            onClick={() => setSelectionMode('substitute')}
            >
            Substitute Selection
          </div>
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

        <div className="max-h-40 overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-700">
                <th className="p-2 text-left">STATUS</th>
                <th className="p-2 text-left text-white">NAME</th>
                <th className="p-2 text-left text-white">TEAM NAME</th>
                <th className="p-2 text-left text-white">PRICE</th>
                <th className="p-2 text-left text-white">PLAYER NO.</th>
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
                        className={`text-white px-2 py-1 rounded ${
                          isPlayerSelected(player) ? 'bg-gray-500' : 'bg-green-500'
                          }`}
                          disabled={isPlayerSelected(player) || budget < player.price}
                          >
                        {isPlayerSelected(player) ? 'Selected' : 'Add'}
                      </button>
                    </td>
                    <td className="p-2 text-white">{player.name}</td>
                    <td className="p-2 text-white">{player.team}</td>
                    <td className="p-2 text-white">{player.price}</td>
                    <td className="p-2 text-white">{player.number}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
  )
}