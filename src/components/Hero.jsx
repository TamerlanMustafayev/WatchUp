import React from "react";


function Hero() {
    return (
        <div className="hero flex flex-fd-c flex-ai-c flex-jc-c">
            <h1> “Time you enjoy wasting is not wasted time.”</h1>
            <p> - <i>Marthe Troly-Curtin</i></p>
            <a href="#shop"><button className="shop" href="#shop" >Shop</button></a>
            <a href="#" className="cart-icon"><i class="fa-solid fa-cart-shopping"></i></a>
        </div>
    )
}

export default Hero;