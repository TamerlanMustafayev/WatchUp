import React from "react";
import { Link } from "react-router-dom";
import featured from "../Images/featured.png"
import Maximilian from "./Maximilian";



function Featured() {
    return (
        <>
            
            <div id="featured" className="featured flex flex-jc-c flex-ai-c">
                
                <img src={featured} alt="" />

                <div className="featured-info flex flex-fd-c flex-jc-sb ">
                    <h2>Maximilian Pocket Watch</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt debitis voluptates recusandae explicabo. Obcaecati alias enim natus debitis?</p>
                    <Link to="/maximilian" className="featured-watch">View Product</Link>
                </div>








            </div>
        
        
        
        </>
    )
}

export default Featured;