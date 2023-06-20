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
       
        {/* <div className="desktop__links">
          <div className="nav__items  flex flex-jc-sa">
            <a className="nav__link" href="#">Portfolio</a>
            <a className="nav__link" href="#">GraphicDesign</a>
            <a className="nav__link" href="#">About Me</a>
            <a className="nav__link" href="#">Contact</a>  
          </div>
        </div> */}

        {/* Mobile Navbar */}
      
        <div  className="bars flex flex-fd-c flex-jc-sa">
          <span className="bar1"></span>
          <span className="bar2"></span>
          <span className="bar3"></span>
        </div>
        
     
      {/* Mobile Menu  */}
    </nav>
    <div className="mobile__menu  flex flex-fd-c flex-jc-c flex-ai-c">
      
        <a href="/">SHOP</a>
        <a href="/">FEATURED</a>
        <a href="/">ABOUT US</a>
        <a href="/">CONTACT</a>  
      
    </div>
    </>
    )
}

export default Header;