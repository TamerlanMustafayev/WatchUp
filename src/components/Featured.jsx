import React from "react";
import { Link } from "react-router-dom";
import featured from "../Images/featured.png"



function Featured() {
    return (
        <>
            
            <div id="featured" className="featured flex flex-fd-c flex-jc-c flex-ai-c">
                <h2>Featured</h2>
                <img src={featured} alt="" />

                <div className="featured-info flex flex-fd-c flex-jc-sb ">
                    <h2>Maximilian Pocket Watch</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt debitis voluptates recusandae explicabo. Obcaecati alias enim natus debitis?</p>
                    <Link to="/maximilian"><button className="button2">View Product</button> </Link>
                </div>








            </div>
        
        
        
        </>
    )
}

export default Featured;