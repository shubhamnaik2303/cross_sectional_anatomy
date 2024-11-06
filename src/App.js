import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Head from './components/Head';
import Level1 from './components/Level1';
import Level2 from './components/Level2';
import Level3 from './components/Level3';
import Level4 from './components/Level4';
import Level5 from './components/level5';
import Abdomen from './components/Abdomen';
import T10 from './components/T10';
import T11 from './components/T11';
import T12_L1 from './components/T12_L1';
import L1 from './components/L1';
import L2 from './components/L2';
import L3 from './components/L3';
import L4 from './components/L4';


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
        <Route path="/abdomen" element={<Abdomen />} />
        <Route path="/abdomen/t10" element={<T10 />} />
        <Route path="/abdomen/t11" element={<T11 />} />
        <Route path="/abdomen/t12_l1" element={<T12_L1 />} />
        <Route path="/abdomen/l1" element={<L1 />} />
        <Route path="/abdomen/l2" element={<L2 />} />
        <Route path="/abdomen/l3" element={<L3 />} />
        <Route path="/abdomen/l4" element={<L4 />} />
        
      
      </Routes>
    </Router>
  );
}

export default App;
