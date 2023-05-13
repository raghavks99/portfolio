import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './Components/Home.js'
import About from './Components/About.js'
import Projects from './Components/Projects.js'
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar.js';
function App() {
  return (
    <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='About' element={<About />}></Route>
            <Route path='Project' element={<Projects />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
