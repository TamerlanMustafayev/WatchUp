import React from "react";
import maximilian from "../Images/featured.png"
import Button from "./Button";
function Maximilian() {
    return (

        <>
            <div id="maximilian" className="maximilian flex flex-fd-c flex-jc-c flex-ai-c">
                
                <img src={maximilian} alt="" />

                <div className="maximilian-info flex flex-fd-c flex-jc-sb ">
                    <h2>Maximilian Pocket Watch</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt debitis voluptates recusandae explicabo. Obcaecati alias enim natus debitis?</p>
                    <Button>Add to cart</Button>
                </div>
                <a href="#" className="cart-icon"><i class="fa-solid fa-cart-shopping"></i></a>

            </div>
            
        </>
    )
}


export default Maximilian