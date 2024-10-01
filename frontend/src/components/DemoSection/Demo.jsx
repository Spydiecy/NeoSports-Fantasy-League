import React, { useEffect } from 'react';
import Democard from '../democards/Democard';
import football from '../../assets/football.png';
import result1 from '../../assets/ResultsImages/1.png'
import result2 from '../../assets/ResultsImages/2.png'
import result3 from '../../assets/ResultsImages/3.png'
import { ChevronRightIcon} from 'lucide-react';
import Videoplayer from '../VideoPlayer/Videoplayer';
import ScrollingCards from '../ScrollingCards';
import {Link} from "react-router-dom";
import AOS from "aos";
import logo1 from '../../assets/participants/1.png'
import logo2 from '../../assets/participants/2.png'
import logo3 from '../../assets/participants/3.png'
import logo4 from '../../assets/participants/4.png'
import "aos/dist/aos.css";
const ProgressBar = ({ value, maxValue, year }) => {
  useEffect(() => {
    AOS.init({duration:1500});
    // AOS.refresh();
  }, []);
  const percentage = (value / maxValue) * 100;
  return (
    <div className="flex items-center mb-4">
      <div className="w-24 text-right mr-4">${value} Billion</div>
      <div className="flex-grow bg-gray-700 rounded-full h-4 overflow-hidden">
        <div
          className="bg-[#00F654] h-full rounded-full"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={maxValue}
        ></div>
      </div>
      <div className="w-24 ml-4">{year}</div>
    </div>
  );
};

const CircularProgress = ({ value, maxValue }) => {
  const percentage = (value / maxValue) * 100;
  const strokeWidth = 10;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative w-64 h-64">
      <svg className="w-full h-full" viewBox="0 0 120 120">
        <circle
          className="text-gray-700"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
        />
        <circle
          className="text-[#00F654]"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (percentage / 100) * circumference}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
          transform="rotate(-90 60 60)"
        />
        <text x="50%" y="50%" dominantBaseline="top" textAnchor="middle" className="text-md font-bold fill-white">
          ${value}
        </text>
        <text x="50%" y="65%" dominantBaseline="top" textAnchor="middle" className="text-md fill-white">
          BILLIONS
        </text>
      </svg>
      <div className="absolute -bottom-4 left-0 right-0 text-center text-white">Curt in 2024</div>
    </div>
  );
};

const ResultCard = ({ date, homeTeam, awayTeam, score, venue }) => (
  <div className="bg-[#2a2a2a] rounded-lg p-4 w-[25vw] h-[25vh]  mx-2">
    <div className="text-center mb-2">{date}</div>
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center">
        <img src={homeTeam.logo} alt={homeTeam.name} className="w-8 h-8 mr-2" />
        <span>{homeTeam.name}</span>
      </div>
      <div className="bg-[#3a3a3a] px-3 py-1 rounded-full">{score}</div>
      <div className="flex items-center">
        <span>{awayTeam.name}</span>
        <img src={awayTeam.logo} alt={awayTeam.name} className="w-8 h-8 ml-2" />
      </div>
    </div>
    <div className="text-center text-sm text-gray-400">{venue}</div>
  </div>
);

const ResultsSlider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const results = [
    {
      date: 'Sep 29, 24',
      homeTeam: { name: 'Osasuna', logo: result1 },
      awayTeam: { name: 'Barcelona', logo: result2 },
      score: '4-2',
      venue: 'Estadio El Sadar, Iruñea'
    },
    {
      date: 'Sep 28, 24',
      homeTeam: { name: 'Bayern München', logo: result2 },
      awayTeam: { name: 'Bayer Leverkusen', logo: result3 },
      score: '1-1',
      venue: 'Allianz Arena, München'
    },
    {
      date: 'Sep 28, 24',
      homeTeam: { name: 'Real Sociedad', logo: result3 },
      awayTeam: { name: 'Valencia', logo: result1 },
      score: '3-0',
      venue: 'Reale Arena, Donostia-San Sebastián'
    },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % results.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [results.length]);

  return (
    <div className="bg-black text-white py-16 px-4">
      <h2 data-aos="fade-left" className="text-4xl font-bold text-center mb-8">
        LATEST <span className="text-[#00F654]">RESULTS</span>
      </h2>
      <ScrollingCards></ScrollingCards>
     
      <div className="flex justify-end mt-4">
        <Link to={'/matches'}>
        <button className="flex items-center text-[#00F654] hover:underline">
          View All <ChevronRightIcon className="ml-1" />
        </button>
        </Link>
      </div>
    </div>
  );
};

export default function Demo() {
  const cards = [
    { id: 1, title: 'Match 1', content: 'Team A 2 - 1 Team B' },
    { id: 2, title: 'Match 2', content: 'Team C 0 - 0 Team D' },
    { id: 3, title: 'Match 3', content: 'Team E 3 - 2 Team F' },
    { id: 4, title: 'Match 4', content: 'Team G 1 - 1 Team i' },
    { id: 5, title: 'Match 5', content: 'Team G 1 - 1 Team j' },
    { id: 6, title: 'Match 6', content: 'Team G 1 - 1 Team k' },
  ];

  return (
    <div className='bg-black text-white'>
      <div className='headings'>
        <h1 className='text-4xl flex justify-center pt-10' data-aos="fade-down">Demo</h1>
        <p className='flex justify-center text-base pt-2' data-aos="fade-left">
          Click to watch the complete demo and experience the thrill of strategic team management in Fantasy Extreme—where every decision counts!
        </p>
      </div>

    <Videoplayer></Videoplayer>
      <div className='cards'>
        <h1 data-aos="fade-down" className='text-4xl flex justify-center pt-20'>
          HOW IT <span className='text-[#00F654]'>WORKS</span>
        </h1>
        <Democard  />
      </div>

      <div className='history flex justify-center'>
        <div
          className="h-[52vh] relative w-[85vw] bg-[#3a3a3a] rounded-3xl p-6
                     transition-all duration-300 ease-in-out
                     before:rounded-xl before:transition-all
                     before:duration-300 before:ease-in-out
                     before:opacity-0 hover:before:opacity-100
                     before:shadow-[0_0_15px_rgba(0,246,84,0.5)]
                     before:hover:shadow-[0_0_20px_rgba(0,246,84,0.7)] flex mt-[10vw]"
        >
          <img
            src={football}
            alt="Football History"
            className="absolute bottom-0 left-0 h-[44vh] w-[22vw] rounded"
          />
             
          <div className="relative z-10 text-white flex flex-col justify-between flex-1 p-6">
            <div className="flex flex-col items-end mb-4">
              <h2 className="text-2xl font-bold text-right"></h2>
              <h3 data-aos="fade-up" className="text-4xl font-semibold text-right">About <span className='text-[#00F654]'>Fantasy</span></h3>
            </div>
            <p data-aos="fade-up" className="text-base mr-0 w-[55vw] ml-[25vw] text-right">
              Take your love for soccer to the next level with fantasy football. Build your own virtual dream team by drafting real footballers. Their performances on the pitch - goals scored, assists made, clean sheets kept - translate into points for your team. You'll compete against friends or online leagues, strategizing your picks, managing injuries, and watching your team rack up. It's a fun and engaging way to experience the beautiful game, combining the thrill of real-world soccer with the challenge of building and managing your own champion squad.
            </p>
            <button className="bg-white h-[20vh] text-black border border-black 
                hover:bg-black hover:text-[#00F654] hover:border-[#00F654] ml-[68vw] mt-[1vw]
                transition duration-300 ease-in-out 
                rounded-xl">
                  <Link to='/footballgame/1'>
              PLAY NOW
                  </Link>
            </button>
          </div>
        </div>
      </div>
      <ResultsSlider />
      <div className="bg-black text-white py-16   px-[10vw]">
        <h2 className="text-4xl font-bold text-center mb-8" data-aos="fade-up ">
          MARKET <span className="text-[#00F654]">VALUE</span>
        </h2>
        <p className="text-center mb-12 max-w-4xl mx-auto">
          Fantasy Extreme is poised for continuous growth by attracting millions of passionate players and fans
          worldwide. See the explosive growth of fantasy sports below
      </p>
        <div data-aos="fade-down" className="text-6xl font-bold text-center mb-12">4 BILLION PEOPLE</div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="w-full md:w-1/3">
            <h3 data-aos="fade-left" className="text-2xl font-bold mb-4 text-center md:text-left">Market Size</h3>
            <CircularProgress value={35.67}  maxValue={100} />
          </div>
          <div className="w-full md:w-2/3">
            <ProgressBar value={20.69} maxValue={87.07} year="EST in 2021" />
            <ProgressBar value={27.2} maxValue={87.07} year="EST in 2022" />
            <ProgressBar value={30.95} maxValue={87.07} year="EST in 2023" />
            <ProgressBar value={87.07} maxValue={87.07} year="EXP in 2031" />
          </div>
        </div>
      </div>
      <div className=' ml-[10vw] mt-[8vh] border w-[85vw] rounded-3xl p-6 flex border-gray-300'>
      <div className='millions'>
        <h4 className='text-[#00F654] text-3xl'> 90 MILLION</h4>
        <h5 className='text-[4rem]'> 90 MILLION</h5>
        <h6 className='text-[#00F654] text-[1.2rem] ml-[20vw]' > PARTICIPANTS</h6>
        </div>
        <div className='logos flex ml-[8vw]'>
        <img className='pl-10' src={logo1}></img>
        <img src={logo2}></img>
        <img src={logo3}></img>
        <img src={logo4}></img>

        </div>
      </div>
    </div>
  );
}