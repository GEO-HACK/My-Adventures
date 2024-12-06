import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Places from './pages/Places'
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/places' element={<Places/>}/>
      </Routes>
    </Router>
   
  );
}

export default App