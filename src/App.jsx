import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Transation from "./components/Transation"
import Report from './components/Report';
import Setting from './components/Setting';
function App() {

  return (
    <>
    <Router>
      
      
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/transation" element={<Transation />} />
          <Route path="/report" element={<Report />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      
    </Router>
      
      
    </>
  )
}

export default App
