import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Home from './pages/main/main';
import About from './pages/about/about';
import NotFound from './pages/404';
import Form from './pages/form/form';

export const App = () => {
  return (
    <div className="App">
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export const WrappedApp = () => {
  return (
    //     <Router>
    <App />
    //     </Router>
  );
};
