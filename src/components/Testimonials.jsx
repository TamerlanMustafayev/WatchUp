import React from "react";
import randomperson from "../Images/randomperson.jpg"

function Testimonials() {
    return (
        <div className="testimonials ">
            <h2>Testimonials</h2>
            <div className="testimonials-container flex flex-fd-c flex-jc-se flex-ai-c">
                <div className="reviews flex flex-fd-c flex-jc-c flex-ai-c">
                    <img src={randomperson} alt="" />
                    <h2 className="names">John Doe</h2>
                    <div className="rating">
                        
                    </div>
                    
                    <p>lit. Autem, repellat, culpa, est magnam nostrum debitis dolorum ab quibusdam voluptates accusantium totam vero exercitationem quasi! Nam.</p>
                </div>
                <div className="reviews flex flex-fd-c flex-jc-c flex-ai-c">
                    <img src={randomperson} alt="" />
                    <h2 className="names">John Doe</h2>
                    <div className="rating">
                        
                    </div>
                    
                    <p>lit. Autem, repellat, culpa, est magnam nostrum debitis dolorum ab quibusdam voluptates accusantium totam vero exercitationem quasi! Nam.</p>
                </div>
                <div className="reviews flex flex-fd-c flex-jc-c flex-ai-c">
                    <img src={randomperson} alt="" />
                    <h2 className="names">John Doe</h2>
                    <div className="rating">
                        
                    </div>
                    
                    <p>lit. Autem, repellat, culpa, est magnam nostrum debitis dolorum ab quibusdam voluptates accusantium totam vero exercitationem quasi! Nam.</p>
                </div>
                
            </div>

        </div>
    )
}

export default Testimonials