import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Head from './components/Head';
import Level1 from './components/Level1';
import Level2 from './components/Level2';
import Level3 from './components/Level3';
import Level4 from './components/Level4';
import Level5 from './components/level5';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/head" element={<Head />} />
        <Route path="/head/level1" element={<Level1 />} />
        <Route path="/head/level2" element={<Level2 />} />
        <Route path="/head/level3" element={<Level3 />} />
        <Route path="/head/level4" element={<Level4 />} />
        <Route path="/head/level5" element={<Level5 />} />
        
      
      </Routes>
    </Router>
  );
}

export default App;
