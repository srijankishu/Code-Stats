import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from './Landing';
import Dashboard from './Dashboard';
import Login from './Login';
import Compare from './Compare';
import Signup from './Signup';

const App = () => {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Landing />} />
        <Route path="/dash" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/compare" element={<Compare/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
  )
}

export default App
