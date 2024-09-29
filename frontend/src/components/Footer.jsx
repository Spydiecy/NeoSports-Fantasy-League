import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const Navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col items-center transition-all duration-1000 ${animate ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mb-6">
            <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 90 L50 10 L90 90 Z" fill="#00ff00" />
              <path d="M30 90 L50 50 L70 90 Z" fill="white" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-green-500">FANTASY</span> EXTREME
          </h2>
          <nav className="mb-4">
            <ul className="flex space-x-6">
              {[
                { name: 'MATCH', path: '/matches' },
                { name: 'PLAYERS', path: '/players' },
                { name: 'LEAGUES', path: '/leagues/IPL' },
                { name: 'GAMEPLAY RULES', path: '/fantasyextremeRules' },
                { name: 'CONTACT US', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-green-500 transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" stroke="#00BFFF" strokeWidth="10" />
                <path d="M30 70 L50 30 L70 70" stroke="#00BFFF" strokeWidth="10" />
              </svg>
              <span className="text-sm">Developed by AMMAG Technologies</span>
            </div>
            <p className="text-sm">COPYRIGHT ©2024 FANTASY EXTREME ALL RIGHTS RESERVED.</p>
            <div className="flex items-center space-x-2">
              <span className="text-sm">Powered by INTERNET COMPUTER</span>
              <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 50 Q50 10 90 50 Q50 90 10 50" stroke="#FF4500" strokeWidth="10" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
