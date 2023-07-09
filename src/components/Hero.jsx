import React from "react";


function Hero() {
    return (
        <div className="hero flex flex-fd-c flex-ai-c flex-jc-c">
            <h1> “Time you enjoy wasting is not wasted time.”</h1>
            <p> - Marthe Troly-Curtin</p>
            <a href="#shop"><button className="button" href="#shop" >SHOP</button></a>
            <a href="#" className="cart-icon"><i class="fa-solid fa-cart-shopping"></i></a>
        </div>
    )
}

export default Hero;