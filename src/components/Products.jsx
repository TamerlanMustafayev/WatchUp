import React, { useState } from "react";
import Clock1 from "../Images/Clock1.webp";
import Clock2 from "../Images/Clock2.webp";
import Clock3 from "../Images/Clock3.webp";
import Clock4 from "../Images/Clock4.webp";
import Clock5 from "../Images/Clock5.webp";
import Clock6 from "../Images/Clock6.webp";
import Clock7 from "../Images/Clock7.webp";
import Clock8 from "../Images/Clock8.webp";
// import Button from "./Button";

    
function Products() {
    
    const productsArray = [
        {
            id:1,
            image: Clock1,
            price: 19.99,
        },
        {
            id:2,
            image: Clock2,
            price: 21.99,
        },
        {
            id:3,
            image: Clock3,
            price: 24.99,
        },
        {
            id:4,
            image: Clock4,
            price: 29.99,
        },
        {
            id:5,
            image: Clock5,
            price: 29.99,
        },
        {
            id:6,
            image: Clock6,
            price: 29.99,
        },
        {
            id:7,
            image: Clock7,
            price: 29.99,
        },
        {
            id:8,
            image: Clock8,
            price: 29.99,
        }
    ]



    return (
        <>
            
            <div className="products">
                <div className="products-container">{
                    
                    productsArray.map((item) =>
                        <>
                            <div className="each-product flex flex-fd-c ">
                                <img src={item.image} alt="" />
                                <span>${item.price}</span>
                                {/* <Button /> */}
                                
                                
                                
                            </div>
                        
                        </>
                    )}
                </div>
            </div>
        </>
        
    )

}
    
export default Products;
