import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Jobs from './components/Jobs';
import Companies from './components/Companies';
import Courses from './components/Courses';
import Statistics from './components/Statistics';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Jobs />
        <Statistics />
        <Companies />
        <WhyChooseUs />
        <Courses />
      </main>
      <Footer />
    </div>
  );
}

export default App;