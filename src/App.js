import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import NoPage from './components/NoPage';
import About from './components/About'
import Instructions from './components/Intructions'
import Calendar from './components/Calendar';
import EditDay from './components/EditDay';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
      <div className="app">
        
      <Routes>
        <Route path="/" element={<Calendar />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/instructions" element={<Instructions />}></Route>
        <Route path="/editday" element={<EditDay />}></Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
