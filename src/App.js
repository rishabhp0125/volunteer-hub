import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Organizations from './pages/Organizations';
import Map from './pages/Map';

function App() {

  const organizations = [
    {
       name: "Boston Area Gleaners",
       city: "Boston",
       state: "Massachusetts",
       country: "United States of America"
    }
 ]

  return (
    <>
      <Navbar />
      <div className='App'>
        <Routes>
        <Route path ="/" element = {<Home/>}/>
        <Route path ="/About" element = {<About/>}/>
        <Route path ="/Organizations" element = {<Organizations/>}/>
        <Route path ="/Map" element = {<Map organizations={organizations}/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;
