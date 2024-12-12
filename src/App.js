// src/App.js
import React from 'react';
import Header from './components/Header';
import Navbar from './Navbar';
import MenBestsellers from './MenBestsellers';
import Image from './image'; // Corrected to uppercase 'Image'
import Holidaygiftimage from './Holidaygiftimage';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <MenBestsellers />
      <Image /> {/* Corrected component name */}
      <Holidaygiftimage/>
      <Footer />
    </div>
  );
}

export default App;



