import React from "react";

function AboutUs() {
    return (
        <>
            <div className="about-us" id="about-us">
                <h2>About WatchUp</h2>
                <div className="aboutUs-container flex flex-fd-c">
                <p >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore inventore qui reiciendis. Tenetur molestias quas fugit possimus? Facilis, earum dicta rerum molestiae molestias dolore consequuntur ratione ut vel ea? Officiis rem in soluta cum asperiores amet error recusandae consequuntur totam iure, beatae sint ad voluptatibus ex necessitatibus, eos maxime, optio ut repellat fuga sequi? Illo impedit cupiditate, veritatis veniam error, velit temporibus, quam voluptatibus officiis facere labore alias eum ad minus? Totam modi atque laborum accusantium, quidem laudantium iure libero perspiciatis repellendus rem consectetur id quibusdam non facere beatae hic placeat unde pariatur? Repellat, sunt iure? Omnis beatae architecto magnam!
                </p>
                <div className="newsletter flex flex-fd-c flex-jc-c flex-ai-c">
                    <h2>Newsletter</h2>
                    <input className="subscription" type="text" placeholder="Your email"  />
                    <button className="sub-btn">Subscribe</button>
                    
                </div>
                </div>
                

            </div>
        </>
    )
}

export default AboutUs;