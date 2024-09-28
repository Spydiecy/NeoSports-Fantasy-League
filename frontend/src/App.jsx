import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/home';
import Matches from './Pages/matches';
import FantasyExtremeRules from './Pages/myrules';
import Navbar from './components/Navbar';
import './App.css';
import RewardsCalc from './Pages/rewardsCalc';
import { useState } from 'react';
import User from './Pages/user';
import IPL from './Pages/IPL';

import FootballTeamSelection from './Pages/FootBallTeamSelection';


function App() {
  const [isShow, setisShow] = useState(false)
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
    
        {/* Default route that redirects to /home */}
        <Route path="/" element={<Navigate to="/home" />} />
        
        {/* Home route */}
        <Route path="/home" element={<Home />} />
        <Route path="/matches" element={<Matches/>} />
        <Route path="/rewardCalculator" element={<RewardsCalc props={{isShow}}></RewardsCalc>} />
        <Route path="/userProfile" element={<User></User>} />
        <Route path="/fantasyextremeRules" element={<FantasyExtremeRules></FantasyExtremeRules>} />
        <Route path="/leagues/IPL" element={<IPL></IPL>} />
        <Route path="/footballgame" element={<FootballTeamSelection/>} />
        
        {/* Catch-all route that redirects to /home */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;
