import Leftsection from './Components/LeftSection';
import CenterSection from './Components/CenterSection';
import RightSection from './Components/RightSection';
import Progressbar from './Components/Progressbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import './DarkMode.css'
import './App.css';
import NotesState from './NotesContext/NotesState';


function App() {


  // Use state to track the current mode (light or dark)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between light and dark modes
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  

return (
  <NotesState>
  
  <div className={`row app ${isDarkMode ? 'dark-mode' : 'light-mode'} min-vh-100`}>
  <button type="button" 
      data-toggle="collapse" 
      data-target="#filters" 
      className="col-1 btn visible-xs visible-sm collapsed d-none"
      >Filter</button>
      <Router>
  <div className={`col left ${isDarkMode ? 'dark-mode' : 'light-mode'}`} id="filters">
  
    <Leftsection isDarkMode={isDarkMode}/>
  </div>
  <Routes>
  <Route  path="/today" element={
    <div className={`col-8 px-4 center ${isDarkMode ? 'dark-mode' : 'light-mode'} `} >
      <CenterSection navlink="today" isDarkMode={isDarkMode}/>
  </div>
  }/>
  <Route  path="/all" element={
    <div className={`col-8 px-4 center ${isDarkMode ? 'dark-mode' : 'light-mode'} `} >
      <CenterSection navlink="all" isDarkMode={isDarkMode}/>
  </div>
  }/>
  <Route  path="/" element={
    <div className={`col-8 px-4 center ${isDarkMode ? 'dark-mode' : 'light-mode'} `} >
      <CenterSection navlink="" isDarkMode={isDarkMode}/>
  </div>
  }/>
  <Route  path="/important" element={
    <div className={`col-8 px-4 center ${isDarkMode ? 'dark-mode' : 'light-mode'} `} >
      <CenterSection navlink="important" isDarkMode={isDarkMode}/>
  </div>
  }/>
  <Route  path="/completed" element={
    <div className={`col-8 px-4 center ${isDarkMode ? 'dark-mode' : 'light-mode'} `} >
      <CenterSection navlink="completed" isDarkMode={isDarkMode}/>
  </div>
  }/>
  <Route  path="/incomplete" element={
    <div className={`col-8 px-4 center ${isDarkMode ? 'dark-mode' : 'light-mode'} `} >
      <CenterSection navlink="incomplete" isDarkMode={isDarkMode}/>
  </div>
  }/>
  </Routes>
  
  

  </Router>
   
  
  
  <div className={`col align-items-end right ${isDarkMode ? 'dark-mode' : 'light-mode'}  `}>
  
    <RightSection/>
    <p className="px-4 " >Switch Mode</p>
  <div className="toggle-theme-wrapper">
      
      
    {/* <span>☀️</span> */}
    <span style={{ fontSize: '14px' }}>Light mode</span>
    <label className="toggle-theme" htmlFor="checkbox">
      <input
        type="checkbox"
        id="checkbox"

        onClick={toggleDarkMode}
      />
      <div className="slider round"></div>
    </label>

    {/* <span>🌒</span> */}
    <span style={{ fontSize: '14px' }}>Dark mode</span>
    </div>

    <Progressbar/>
    
  </div>
  
  
  </div>
  
  </NotesState>
);
}

export default App;
