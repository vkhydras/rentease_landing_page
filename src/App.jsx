import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Waitlist from './components/Waitlist';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waitlist" element= {<Waitlist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
