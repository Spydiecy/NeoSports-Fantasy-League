import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route that redirects to /home */}
        <Route path="/" element={<Navigate to="/home" />} />
        
        {/* Home route */}
        <Route path="/home" element={<Home />} />
        
        {/* Catch-all route that redirects to /home */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;
