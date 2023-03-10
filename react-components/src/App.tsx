import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

//import { useState } from 'react';
//import reactLogo from './assets/react.svg';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/main/main';
import About from './pages/about/about';
import NotFound from './pages/404';

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
