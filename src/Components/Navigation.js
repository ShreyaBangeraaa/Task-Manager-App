import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllTasks from "./AllTasks";
import TodayTasks from "./TodayTask";
import CompletedTasks from "./CompletedTasks";
import UncompletedTasks from "./UncompletedTasks";
import ImportantTasks from "./ImportantTasks";
import Navbar from "./Navbar";
import CenterSection from "./CenterSection";


export default function Navigation(props) {
  return (
    
      <BrowserRouter>
      <Navbar isDarkMode={props.isDarkMode}/>
        <Routes>
          
          <Route  path="/today" element={<TodayTasks/>}/>
            <Route  path="/all" element={<AllTasks/> } />
            <Route exact path="/important" element={<ImportantTasks />} />
            <Route exact path="/completed" element={<CompletedTasks />} />
            <Route exact path="/incomplete" element={<UncompletedTasks />} />
          
       
        </Routes>
        
      </BrowserRouter>
   
  );
}
