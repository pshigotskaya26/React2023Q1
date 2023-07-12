import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Home from './pages/main/main';
import About from './pages/about/about';
import NotFound from './pages/404';
import Form from './pages/form/form';
export const App = () => {
    return (React.createElement("div", { className: "App" },
        React.createElement("main", { className: "main" },
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
                React.createElement(Route, { path: "/about", element: React.createElement(About, null) }),
                React.createElement(Route, { path: "/form", element: React.createElement(Form, null) }),
                React.createElement(Route, { path: "*", element: React.createElement(NotFound, null) }))),
        React.createElement(Footer, null)));
};
export const WrappedApp = () => {
    return (React.createElement(Router, null,
        React.createElement(App, null)));
};
