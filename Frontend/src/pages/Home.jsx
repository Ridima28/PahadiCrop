import React from 'react';
import Navbar from '../components/Landing/Navbar';
import About from '../components/Landing/About';
import Contact from '../components/Landing/Contact';
import Features from '../components/Landing/Features'; 



export default function Home() {
  return (
    <div className="min-h-screen bg-background">

      <Navbar />    
      <About />
      <Features />
    </div>
  );
}   