import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

//import { useState } from 'react';
//import reactLogo from './assets/react.svg';
import './App.css';
import Header from './components/header/header';
import Home from './pages/main';
import About from './pages/about';

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </Router>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
