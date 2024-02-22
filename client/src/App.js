import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Welcome from './components/Welcome';
import HomePage from './components/Homepage';
import BusOptions from './components/BusOptions';
import BusBookingForm from './components/BusBookingForm'; // Import the BusBookingForm component

import "./App.css"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Success from './components/Success'
function App() {
  return (
    <Router>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/busoptions" element={<BusOptions />} />
        {/* Ensure the path matches exactly */}
        <Route path="/bus-booking-form" element={<BusBookingForm />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
