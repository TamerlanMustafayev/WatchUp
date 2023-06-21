import React from "react";
import Hero from "./Hero";
import Featured from "./Featured";
import Products from "./Products";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

function Home() {
    return (
        <div>
            <Hero />
            <Featured />
            <Products />
            <Testimonials />
            <AboutUs />
            <Contact />
        </div>
    )
}

export default Home