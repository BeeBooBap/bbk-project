import './App.css';
import React from 'react'
import Nav from './components/Nav';
import Home from './pages/Home';
import Matter from './pages/Matter';

import AddCase from "./components/add-case";
import Case from "./components/case";
import CaseList from "./components/case-list";
import Login from "./components/login";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/matter" element={<Matter />}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
