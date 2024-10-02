import React, { useState, useEffect } from 'react';
import { X, Youtube, Facebook, Linkedin, Music, Search, ChevronDown } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { createTeam, getTeam, getPlayers } from './fantasyFootballABI';
import { Tooltip } from '@nextui-org/react';
import playerImg from '../assets/player.png';

export default function FootballTeamSelection() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [budget, setBudget] = useState(140);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [formation, setFormation] = useState('3-4-3');
  const [activeTab, setActiveTab] = useState('Goalkeeper');
  const [searchTerm, setSearchTerm] = useState('');
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const provider = new ethers.BrowserProvider(window.ethereum);
          const playersData = await getPlayers(provider);
          setPlayers(playersData);
          setIsLoading(false);
        } catch (err) {
          console.error("Error fetching players:", err);
          setError("Failed to fetch players. Please try again.");
          setIsLoading(false);
        }
      } else {
        setError("Please install MetaMask to use this feature.");
        setIsLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  const positions = [
    { name: 'Goalkeeper', limit: 1 },
    { name: 'Defender', limit: 4 },
    { name: 'Midfielder', limit: 4 },
    { name: 'Forward', limit: 3 },
  ];

  const addPlayer = (player) => {
    if (selectedPlayers.length < 11 && 
        selectedPlayers.filter(p => p.position === player.position).length < positions.find(pos => pos.name === player.position).limit &&
        budget >= player.price) {
      setSelectedPlayers([...selectedPlayers, player]);
      setBudget(budget - player.price);
    }
  };

  const removePlayer = (player) => {
    setSelectedPlayers(selectedPlayers.filter(p => p.id !== player.id));
    setBudget(budget + player.price);
  };

  const handleCreateTeam = async () => {
    if (selectedPlayers.length !== 11) {
      alert("Please select 11 players for your team.");
      return;
    }

    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const playerIds = selectedPlayers.map(player => player.id);
        const success = await createTeam(signer, id, playerIds);
        if (success) {
          alert("Team created successfully!");
          navigate('/matches');
        } else {
          alert("Failed to create team. Please try again.");
        }
      } catch (err) {
        console.error("Error creating team:", err);
        alert("Error creating team. Please try again.");
      }
    } else {
      alert("Please install MetaMask to use this feature.");
    }
  };

  if (isLoading) return <div className="text-white text-center mt-20">Loading players...</div>;
  if (error) return <div className="text-red-500 text-center mt-20">{error}</div>;

  return (
    <div className='h-[170vh] bg-black text-white'>
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-green-800 opacity-20">
          {/* Field lines */}
        </div>
        
        <div className="absolute left-0 right-0 top-0 bg-gray-800 bg-opacity-80 p-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="my-budget-div">
              <div className="text-sm">BUDGET</div>
              <div className="text-3xl font-bold">{budget}</div>
            </div>
            <div>
              <div className="text-sm">SELECTED PLAYERS</div>
              <div className="text-3xl font-bold">{selectedPlayers.length}</div>
            </div>
          </div>
        </div>

        {/* Selected players on pitch */}
        {selectedPlayers.map((player, index) => (
          <div
            key={player.id}
            className="absolute"
            style={{
              left: `${(index % 4 + 1) * 20}%`,
              top: `${Math.floor(index / 4 + 1) * 20}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <img src={playerImg} alt={player.name} className="w-24 h-24 rounded-full" />
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
        ))}
      </div>

      <div className="absolute left-0 right-0 bottom-0 bg-gray-800 bg-opacity-80 p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl text-gray-500 font-bold">Player Selection</div>
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
            <button onClick={() => setSelectedPlayers([])} className="bg-gray-700 text-white px-4 py-1 rounded">Reset</button>
            <button onClick={handleCreateTeam} className="bg-green-500 text-white px-4 py-1 rounded">Create Team</button>
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
                          selectedPlayers.some(p => p.id === player.id) ? 'bg-gray-500' : 'bg-green-500'
                        }`}
                        disabled={selectedPlayers.some(p => p.id === player.id) || budget < player.price}
                      >
                        {selectedPlayers.some(p => p.id === player.id) ? 'Selected' : 'Add'}
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
  );
}