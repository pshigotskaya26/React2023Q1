import React from 'react';
import { Route, Routes, BrowserRouter as Router, HashRouter } from 'react-router-dom';

//import { useState } from 'react';
//import reactLogo from './assets/react.svg';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/main/main';
import About from './pages/about/about';
import NotFound from './pages/404';

export function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
