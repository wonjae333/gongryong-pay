import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import HowToUse from './pages/HowToUse';
import MicropaymentService from './pages/MicropaymentService';
import InformationFeeService from './pages/InformationFeeService';
import CreditCardService from './pages/CreditCardService';
import GiftCardService from './pages/GiftCardService';
import ContentFeeService from './pages/ContentFeeService';
import FAQ from './pages/FAQ';
import Reviews from './pages/Reviews';
import Blog from './pages/Blog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/how-to-use" element={<Layout><HowToUse /></Layout>} />
      <Route path="/services/micropayment" element={<Layout><MicropaymentService /></Layout>} />
      <Route path="/services/information-fee" element={<Layout><InformationFeeService /></Layout>} />
      <Route path="/services/credit-card" element={<Layout><CreditCardService /></Layout>} />
      <Route path="/services/gift-card" element={<Layout><GiftCardService /></Layout>} />
      <Route path="/services/content-fee" element={<Layout><ContentFeeService /></Layout>} />
      <Route path="/reviews" element={<Layout><Reviews /></Layout>} />
      <Route path="/faq" element={<Layout><FAQ /></Layout>} />
      <Route path="/blog" element={<Layout><Blog /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="/privacy" element={<Layout><PrivacyPolicy /></Layout>} />
      <Route path="/terms" element={<Layout><Terms /></Layout>} />
    </Routes>
  );
}

export default App;
