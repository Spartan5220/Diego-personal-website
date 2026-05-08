import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import TravelMap from './components/TravelMap';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Timeline />
        <TravelMap />
        <Hobbies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
