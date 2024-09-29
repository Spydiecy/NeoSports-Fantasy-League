import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollCard from './ScrollCard'


const matchData = [
  {
    id: 1,
    date: 'Sep 29, 24',
    homeTeam: 'Osasuna',
    awayTeam: 'Barcelona',
    homeScore: 4,
    awayScore: 2,
    stadium: 'Estadio',
    homeLogoUrl: 'https://media.api-sports.io/football/teams/157.png',
    awayLogoUrl: 'https://media.api-sports.io/football/teams/168.png',
  },
  {
    id: 2,
    date: 'Sep 28, 24',
    homeTeam: 'München',
    awayTeam: 'Leverkusen',
    homeScore: 1,
    awayScore: 1,
    stadium: 'Allianz',
    homeLogoUrl: 'https://media.api-sports.io/football/teams/548.png',
    awayLogoUrl: 'https://media.api-sports.io/football/teams/532.png',
  },
  {
    id: 3,
    date: 'Sep 28, 24',
    homeTeam: 'Sociedad',
    awayTeam: 'Valencia',
    homeScore: 3,
    awayScore: 0,
    stadium: 'Reale Arena',
    homeLogoUrl: 'https://media.api-sports.io/football/teams/727.png',
    awayLogoUrl: 'https://media.api-sports.io/football/teams/548.png',
  },
  {
    id: 4,
    date: 'Sep 30, 24',
    homeTeam: 'Atletico',
    awayTeam: 'Real',
    homeScore: 2,
    awayScore: 2,
    stadium: 'Wanda',
    homeLogoUrl: 'https://media.api-sports.io/football/teams/529.png',
    awayLogoUrl: 'https://media.api-sports.io/football/teams/168.png',
  },
  {
    id: 5,
    date: 'Oct 1, 24',
    homeTeam: 'Sevilla',
    awayTeam: 'Villarreal',
    homeScore: 1,
    awayScore: 0,
    stadium: 'Ramón Sánchez Pizjuán, Sevilla',
    homeLogoUrl: 'https://media.api-sports.io/football/teams/538.png',
    awayLogoUrl: 'https://media.api-sports.io/football/teams/547.png',
  },
]

export default function ScrollingCards() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + direction + matchData.length) % matchData.length
        if (nextIndex === 0) {
          setDirection(1)
          return 0
        } else if (nextIndex === matchData.length - 1) {
          setDirection(-1)
          return matchData.length - 1
        }
        return nextIndex
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [direction])

  return (
    <div className="w-full bg-black p-4 overflow-x-hidden">
      <div className="relative w-[90vw] h-64 mx-auto">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="absolute w-full h-full"
            initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
            transition={{ duration: 0.5 }}
          >
            <MatchCard match={matchData[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

function MatchCard({ match }) {
  return (
    <motion.div
      className="w-full h-full bg-black rounded-lg overflow-hidden overflow-x-hidden shadow-lg"
    
      transition={{ duration: 0.3 }}
    >
      <div className="p-4 flex gap-3 ml-16">
        
       
       <ScrollCard match={match}></ScrollCard>      
       <ScrollCard match={match}></ScrollCard>      
       <ScrollCard match={match}></ScrollCard>      
 
      </div>
      
    </motion.div>
  )
}