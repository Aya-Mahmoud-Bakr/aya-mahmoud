import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import CaseStudies from './sections/CaseStudies';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-['Cairo']">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;