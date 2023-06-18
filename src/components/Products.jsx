import React, { useState } from "react";
import Clock1 from "../Images/Clock1.webp";
import Clock2 from "../Images/Clock2.webp";
import Clock3 from "../Images/Clock3.webp";
import Clock4 from "../Images/Clock4.webp";
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
            image: Clock4,
            price: 29.99,
        },
        {
            id:6,
            image: Clock4,
            price: 29.99,
        },
        {
            id:7,
            image: Clock4,
            price: 29.99,
        },
        {
            id:8,
            image: Clock4,
            price: 29.99,
        }
    ]



    return (
        <>
            
            <div className="products">
                <h2>Shop</h2>
                <div className="products-container">{
                    
                    productsArray.map((item) =>
                        <>
                            <div className="each-product flex flex-fd-c flex-jc-c flex-ai-c">
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
