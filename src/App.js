import React from 'react';
import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Products"
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Featured from './components/Featured';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Featured />
      <Products />
      <Testimonials />
      <AboutUs />
    </div>
  );
}

export default App;
