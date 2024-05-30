import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteStatus from './context/notes/NoteState';
import Alert from './components/Alert';
function App() {
  return (
    <NoteStatus>
    <BrowserRouter>

      <Navbar/>
      <Alert message= "This is Amazing react course"/>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

        </Routes>

      </div>
    </BrowserRouter>
    </NoteStatus>
  );
}

export default App;
