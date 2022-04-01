import React from 'react'
import {Routes, Route} from "react-router-dom";
import './App.css';
import {
  Home, About, Contact, Whoops404, Resume, 
} from "./pages"

function App() {
  return <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="resume" element={<Resume />} />
      <Route path="/*" element={<Whoops404 />} />
    </Routes>
  </div>
}

export default App;
