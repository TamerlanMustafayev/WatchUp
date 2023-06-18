import React from 'react';
import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Products"
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
      <AboutUs />
    </div>
  );
}

export default App;
