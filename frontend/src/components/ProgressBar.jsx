"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const buttons = ["Upcoming", "In Progress", "Completed"];

export default function ProgressBar({ activeButton, setActiveButton, currentDate, setCurrentDate }) {
  useEffect(() => {
    if (!(currentDate instanceof Date) || isNaN(currentDate.getTime())) {
      setCurrentDate(new Date()); // Reset to current date if invalid
    }
  }, [currentDate, setCurrentDate]);

  const formatDate = (date) => {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      return { day: "Invalid", date: "Date", month: "" };
    }
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const months = [
      "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
      "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];
    return {
      day: days[date.getDay()],
      date: date.getDate().toString().padStart(2, "0"),
      month: months[date.getMonth()],
    };
  };

  const changeDate = (days) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + days);
    setCurrentDate(newDate);
  };

  return (
    <div className="flex flex-row items-center justify-between bg-transparent p-4">
      <div className="flex space-x-4 mb-3">
        {buttons.map((button) => (
          <motion.button
            key={button}
            className={`px-6 py-2 rounded-full text-white ${
              activeButton === button ? "bg-transparent" : "bg-gray-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveButton(button)}
            style={{
              boxShadow:
                activeButton === button
                  ? "0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00"
                  : "none",
            }}
          >
            {button}
          </motion.button>
        ))}
      </div>
      <div className="flex items-center space-x-4 bg-gray-800 rounded-full px-5">
        <motion.button
          className="p-2 rounded-full bg-gray-700 text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeDate(-1)}
        >
          <ChevronLeft size={24} />
        </motion.button>
        <div className="flex space-x-2">
          {[-1, 0, 1].map((offset) => {
            const date = new Date(currentDate);
            date.setDate(date.getDate() + offset);
            const { day, date: dateNum, month } = formatDate(date);
            return (
              <motion.div
                key={offset}
                className={`flex flex-col items-center p-2 rounded-lg ${
                  offset === 0 ? "bg-gray-900" : "bg-transparent"
                }`}
                style={{
                  boxShadow:
                    offset === 0
                      ? "0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00"
                      : "none",
                }}
              >
                <span className="text-gray-400 text-xs">{day}</span>
                <span className="text-white font-bold">{dateNum}</span>
                <span className="text-gray-400 text-xs">{month}</span>
              </motion.div>
            );
          })}
        </div>
        <motion.button
          className="p-2 rounded-full bg-gray-700 text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeDate(1)}
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>
    </div>
  );
}