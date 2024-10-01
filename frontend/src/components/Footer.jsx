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
          <img src="https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/Compressed/logo/logo.png"/>
          </div>
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-green-500">Neo Sports</span> Fantasy League
          </h2>
          <nav className="mb-4">
            <ul className="flex space-x-6">
              {[
                { name: 'MATCH', path: '/matches' },
                { name: 'PLAYERS', path: '/players' },
                { name: 'LEAGUES', path: '/leagues/IPL' },
                { name: 'GAMEPLAY RULES', path: '/fantasyextremeRules' },
                { name: 'CONTACT US', path: '/contactUs' },
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
           

            </div>
            <p className="text-sm">COPYRIGHT ©2024 Neo Sports Fantasy League EXTREME ALL RIGHTS RESERVED.</p>
            <div className="flex items-center space-x-2">
          
      
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
