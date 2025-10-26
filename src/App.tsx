import React from 'react';
import BrowserHeader from './components/BrowserHeader';
import Header from './components/Header';
import Hero from './components/Hero';
// import HowItWorks from './components/HowItWorks';
// import Features from './components/Features';
// import Contact from './components/Contact';
// import DownloadApp from './components/DownloadApp';
// import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserHeader />
      <Header />
      <Hero />
      {/* <HowItWorks />
      <Features />
      <Contact />
      <DownloadApp />
      <Footer /> */}
    </div>
  );
}

export default App;
