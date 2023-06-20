import React from "react";
// import { NavLink } from "react-router-dom";
import featured from "../Images/featured.png"
// import {
//     createBrowserRouter,
//     Route,
//     Link,
//     createRoutesFromElements,
//     RouterProvider
//   } from 'react-router-dom';


function Featured() {
    return (
        <>
            
            <div id="featured" className="featured flex flex-jc-c flex-ai-c">
                
                <img src={featured} alt="" />

                <div className="featured-info flex flex-fd-c flex-jc-sb ">
                    <h2>Maximilian Pocket Watch</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt debitis voluptates recusandae explicabo. Obcaecati alias enim natus debitis?</p>
                    <button className="featured-watch">View Product</button>
                </div>








            </div>
        
        
        
        </>
    )
}

export default Featured;