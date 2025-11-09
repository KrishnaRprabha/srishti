import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BrandIntroHeader from './components/BrandIntroHeader';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ThankYou from './pages/Thankyou';

function App() {
  return (
    <Router>
      <BrandIntroHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;

