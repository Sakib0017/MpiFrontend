import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Transation from "./components/Transation"
import Report from './components/Report';
import Setting from './components/Setting';
import Dashboard from './components/Dashboard';
function App() {

  return (
    <>
    <Router>
      
      
        <Routes>
          
          <Route path="/transation" element={<Transation />} />
          <Route path="/report" element={<Report />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      
    </Router>
      
      
    </>
  )
}

export default App
