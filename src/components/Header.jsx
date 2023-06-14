import React, { useState } from 'react';

function Header() {





    return (<>
        
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
    {/* <div className="mobile__menu hide-for-desktop ">
      <div classNameName="mobile__menu__links flex flex-fd-c flex-jc-c flex-ai-c">
        <a href="/">Portfolio</a>
        <a href="/">GraphicDesign</a>
        <a href="/">About Me</a>
        <a href="/">Contact</a>  
      </div>
    </div> */}
    </>
    )
}

export default Header;