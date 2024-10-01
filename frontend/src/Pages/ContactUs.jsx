"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion'
import mridul from '../assets/mridul.jpg'
import naman from '../assets/naman.jpg'
import tanishq from '../assets/tanishq.jpeg'

const TeamMember = ({ name, role, description, imageUrl }) => {
  const cardRef = useRef(null)
  const [hovered, setHovered] = useState(false)

  const x = useSpring(0, { stiffness: 150, damping: 30 })
  const y = useSpring(0, { stiffness: 150, damping: 30 })

  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])
  const scale = useTransform(x, [-100, 100], [0.95, 1.05])

  const handleMouseMove = (event) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = event.clientX - centerX
    const mouseY = event.clientY - centerY
    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      className="bg-gray-800 p-6 rounded-xl shadow-2xl overflow-hidden perspective-1000 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
    >
      <motion.div style={{ transform: "translateZ(75px)" }}>
        <div className="relative w-full h-80 mb-6 overflow-hidden rounded-lg">
          <motion.img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <motion.h3
          className="text-3xl font-bold mb-2 text-green-400"
          style={{ transform: "translateZ(50px)" }}
          animate={{ y: hovered ? -5 : 0 }}
        >
          {name}
        </motion.h3>
        <motion.p
          className="text-white mb-4 text-xl"
          style={{ transform: "translateZ(40px)" }}
          animate={{ y: hovered ? -3 : 0 }}
        >
          {role}
        </motion.p>
        <motion.p
          className="text-gray-400 text-sm"
          style={{ transform: "translateZ(30px)" }}
          animate={{ opacity: hovered ? 1 : 0.8 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

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
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-8">
      <motion.h1
        className="text-6xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="text-green-400">NeoX Grind Hackathon: </span>
        <ChangingText words={titleWords} />
        <span className="text-green-400"> Project</span>
      </motion.h1>

      <motion.div
        className="max-w-4xl mx-auto bg-gray-800 p-10 rounded-2xl shadow-2xl mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-4xl font-semibold mb-6 text-green-300">Our Project</h2>
        <p className="text-gray-300 mb-4 text-lg">
          We've developed a unique blockchain-based project for the sports field as part of the NeoX Grind Hackathon. Our solution leverages the power of blockchain technology to revolutionize the way sports data is managed and accessed.
        </p>
        <p className="text-gray-300 text-lg">
          By utilizing smart contracts and decentralized data storage, we're bringing unprecedented transparency and efficiency to sports management and fan engagement.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <TeamMember
          name="Tanishq Gupta"
          role="Blockchain Developer"
          description="Visionary leader guiding our team through the intricacies of blockchain development and project management."
          imageUrl={tanishq}
        />
        <TeamMember
          name="Naman Bansal"
          role="Full Stack Developer"
          description="Expert in smart contract development and blockchain integration, ensuring the security and efficiency of our platform."
          imageUrl={naman}
        />
        <TeamMember
          name="Mridul Dhamija"
          role="Full Stack Developer"
          description="Creative mind behind our user interface, blending aesthetics with functionality for an optimal user experience."
          imageUrl={mridul}
        />
      </div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h2 className="text-4xl font-semibold mb-6 text-green-400">Contact Us</h2>
        <p className="text-gray-300 text-xl">
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