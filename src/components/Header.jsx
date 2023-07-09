import React from 'react';

window.onload=function(){

  const bars = document.querySelector(".bars");
  const mobileMenu = document.querySelector(".mobile__menu")
  bars.addEventListener("click", function () {
  
    if (bars.classList.contains("open")) {
      bars.classList.remove("open")
      mobileMenu.classList.remove("is-active")
    }
    
    else {
      bars.classList.add("open")
      mobileMenu.classList.add("is-active")

    }
    
  })
}



function Header() {
  return (
    <>
      
        
        {/*  Navbar  */}
     <nav className="nav">
       
        <div className="desktop__links flex flex-jc-c hide-for-mobile">
        
            <a className="nav__link" href="#shop">Shop</a>
            <a className="nav__link" href="#featured">Featured</a>
            <a className="nav__link" href="#about-us">About Us</a>
            <a className="nav__link" href="#contact">Contact</a>  
        </div>

        {/* Mobile Navbar */}
      
        <div  className="bars flex flex-fd-c flex-jc-sa">
          <span className="bar1"></span>
          <span className="bar2"></span>
          <span className="bar3"></span>
        </div>
        
     
    </nav>
      {/* Mobile Menu  */}
    <div className="mobile__menu  flex flex-fd-c flex-jc-c flex-ai-c">
      
        <a href="#shop">SHOP</a>
        <a href="#featured">FEATURED</a>
        <a href="#about-us">ABOUT US</a>
        <a href="#contact">CONTACT</a>  
      
    </div>
    </>
    )
}

export default Header;