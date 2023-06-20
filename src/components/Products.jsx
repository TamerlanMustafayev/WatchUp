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
            id: 1,
            name: "Karona 1977",
            image: Clock1,
            price: 199.99,
        },
        {
            id: 2,
            name: "Shertz",
            image: Clock2,
            price: 217.99,
        },
        {
            id: 3,
            name: "Seitia",
            image: Clock3,
            price: 224.99,
        },
        {
            id: 4,
            name: "Matrana",
            image: Clock4,
            price: 329.99,
        },
        {
            id: 5,
            name: "Blnosk",
            image: Clock5,
            price: 629.99,
        },
        {
            id:6,
            name: "Nautsky65",
            image: Clock6,
            price: 729.99,
        },
        {
            id: 7,
            name: "Stroyev",
            image: Clock7,
            price: 269.99,
        },
        {
            id: 8,
            name: "Kendoks T2",
            image: Clock8,
            price: 298.99,
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
                                <p>{item.name}</p>
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
