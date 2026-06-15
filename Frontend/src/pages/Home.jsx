import React from 'react';
import Navbar from '../components/Landing/Navbar';
import About from '../components/Landing/About';
import Features from '../components/Landing/Features'; 
import Footer from '../components/Landing/Footer';



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      
      <Navbar />

      <main className="flex-1">
        <About />
        <Features />
      </main>

      <Footer />
    </div>
  );
}