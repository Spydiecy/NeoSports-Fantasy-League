"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TeamMember = ({ name, role, description, imageUrl }) => (
  <motion.div
    className="bg-gray-900 p-6 rounded-lg shadow-lg overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <img src={imageUrl} alt={name} className="w-full h-64 object-cover rounded-lg mb-4" />
    <h3 className="text-2xl font-bold mb-2 text-green-400">{name}</h3>
    <p className="text-green-300 mb-4">{role}</p>
    <p className="text-gray-400">{description}</p>
  </motion.div>
)

const ChangingText = ({ words }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [words.length])

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="inline-block"
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  )
}

export default function ContactUs() {
  const titleWords = ['Innovative', 'Blockchain', 'Cutting-edge', 'Decentralized']

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <motion.h1
        className="text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="text-green-400">NeoX Grind Hackathon: </span>
        <ChangingText words={titleWords} />
        <span className="text-green-400"> Project</span>
      </motion.h1>

      <motion.div
        className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-xl shadow-2xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-green-300">Our Project</h2>
        <p className="text-gray-300 mb-4">
          We've developed a unique blockchain-based project for the sports field as part of the NeoX Grind Hackathon. Our solution leverages the power of blockchain technology to revolutionize the way sports data is managed and accessed.
        </p>
        <p className="text-gray-300">
          By utilizing smart contracts and decentralized data storage, we're bringing unprecedented transparency and efficiency to sports management and fan engagement.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TeamMember
          name="Tanishq Gupta"
          role="Team Leader"
          description="Visionary leader guiding our team through the intricacies of blockchain development and project management."
          imageUrl="/placeholder.svg?height=300&width=300"
        />
        <TeamMember
          name="Naman Bansal"
          role="Blockchain Developer"
          description="Expert in smart contract development and blockchain integration, ensuring the security and efficiency of our platform."
          imageUrl="/placeholder.svg?height=300&width=300"
        />
        <TeamMember
          name="Mridul Dhamija"
          role="Frontend Developer"
          description="Creative mind behind our user interface, blending aesthetics with functionality for an optimal user experience."
          imageUrl="/placeholder.svg?height=300&width=300"
        />
      </div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-green-400">Contact Us</h2>
        <p className="text-gray-300">
          Interested in learning more about our project? Reach out to us at{' '}
          <a href="mailto:team@neoxgrindhackathon.com" className="text-green-400 hover:underline">
            team@neoxgrindhackathon.com
          </a>
        </p>
      </motion.div>

      <motion.div
        className="fixed bottom-0 left-0 w-full h-2 bg-green-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </div>
  )
}