import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from "./components/Header"


import Home from './components/Home';
import Maximilian from './components/Maximilian';

function App() {
  return (

    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/maximilian' element={<Maximilian/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
