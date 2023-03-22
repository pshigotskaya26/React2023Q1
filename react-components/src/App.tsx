import React, { Component } from 'react';
import { Route, Routes, BrowserRouter as Router, HashRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Home from './pages/main/main';
import About from './pages/about/about';
import NotFound from './pages/404';
import Form from './pages/form/form';

export class App extends Component {
  render() {
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
  }
}

export class WrappedApp extends Component {
  render() {
    return (
      <Router>
        <App />
      </Router>
    );
  }
}
