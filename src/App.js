import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
// import ParticleBackground from './components/ParticleBackground/ParticleBackground'; // Assuming you have a ParticleBackground component

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/portfolioo" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
