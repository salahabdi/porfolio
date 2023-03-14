
import React from 'react';
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import './components/styles/App.scss';
import {Routes, Route } from 'react-router-dom';
// import Footer from './components/Footer';




export default function App() {
  return (
    <div className='app'>
      <MyLayout>
        <React.Fragment>
          <Routes>
            
            <Route exact path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/projects" element={<Projects/>} />
          </Routes>
        </React.Fragment>
      </MyLayout>
    </div>
  );

  function MyLayout({ children }) {
    return (
      <div>
        <div>
          <Navbar />
        {children}
      </div>
      </div>
    );
  }
}

