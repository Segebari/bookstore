import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Books from './components/Books';
import Footer from './components/Footer';
import { Link, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    
      <>
        <Navbar />
        <Hero />
        <Books />
        <Footer />

        {/* <Routes>
          <Route />
        </Routes> */} 
      </>
     
  )
}

export default App
