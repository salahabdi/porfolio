
import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Home from "./components/Home";
import './components/styles/App.scss';
import {Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <div className='app'>
      <MyLayout>
        <React.Fragment>
          <Routes>
            {/* <Route path="/" element={<Navbar/>} /> */}
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
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
        <Navbar />
        {children}
      </div>
    );
  }
}

