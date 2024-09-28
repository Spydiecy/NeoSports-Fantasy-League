"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const leagues = [
  "All",
  "Super League",
  "UEFA Champions League",
  "La Liga",
  "Premier League",
  "Bundesliga",
]

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLeague, setSelectedLeague] = useState(leagues[0])

  return (
    <div className="flex justify-center items-center  bg-gray-900  h-fit">
      <div className="relative w-44">
        <motion.button
          className="w-full px-4 py-2 text-left bg-gray-800 text-white rounded-md focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="flex justify-between items-center">
            {selectedLeague}
            <ChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </span>
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="absolute w-full mt-2 py-2 bg-gray-800 rounded-md shadow-lg z-10"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              style={{
                boxShadow: `0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00`,
              }}
            >
              {leagues.map((league) => (
                <motion.li
                  key={league}
                  className="px-4 py-2 cursor-pointer text-white hover:bg-gray-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05, x: 10 }}
                  onClick={() => {
                    setSelectedLeague(league)
                    setIsOpen(false)
                  }}
                >
                  {league}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}