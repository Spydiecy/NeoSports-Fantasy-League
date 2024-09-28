import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/home';
import Matches from './Pages/matches';
import './App.css';
import RewardsCalc from './Pages/rewardsCalc';
import { useState } from 'react';
import User from './Pages/user';
import FantasyExtremeRules from './Pages/myrules';

function App() {
  const [isShow, setisShow] = useState(false)
  return (
    <Router>
      <Routes>
    
        {/* Default route that redirects to /home */}
        <Route path="/" element={<Navigate to="/home" />} />
        
        {/* Home route */}
        <Route path="/home" element={<Home />} />
        <Route path="/matches" element={<Matches/>} />
        <Route path="/gameplayrules" element={<RewardsCalc props={{isShow}}></RewardsCalc>} />
        <Route path="/userProfile" element={<User></User>} />
        <Route path="/fantasyextremeRules" element={<FantasyExtremeRules></FantasyExtremeRules>} />
        
        {/* Catch-all route that redirects to /home */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;
