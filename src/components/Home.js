import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import React, { useEffect , useState} from 'react';
import { Link as RouterLink} from "react-router-dom";
import $ from 'jquery';


const Home = () => {
 
  


  useEffect(() => {
    const header = $("header");
    const introH = $("#intro").innerHeight();
    let scrollOffset = $(window).scrollTop();

    function checkScroll(scrollOffset) {
      if (scrollOffset >= introH) {
        header.addClass("fixed");
      } else {
        header.removeClass("fixed");
      }
    }
    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
      scrollOffset = $(this).scrollTop();

      checkScroll(scrollOffset);
    })
  
  $("#nav-toggle").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("nav").toggleClass("active");
  });
}, []);

  return (
    <div className='welcome'>
    <header className="header" id="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <ScrollLink to="intro" smooth={true} duration={500}>Parter</ScrollLink>
          </div>

          <nav class="nav" id="nav">
            <ScrollLink className="nav__link" to="about" smooth={true} duration={500}>About Us</ScrollLink>
            <ScrollLink className="nav__link" to="assortment" smooth={true} duration={500}>Events</ScrollLink>
            <ScrollLink className="nav__link" to="delivery" smooth={true} duration={500}>Application</ScrollLink>
            <ScrollLink className="nav__link" to="footer" smooth={true} duration={500}>Contacts</ScrollLink>
            <RouterLink className="nav__link" to="/login">Log Out</RouterLink>
          </nav>

          <button className="nav-toggle" id="navtoggle" type="button">
            <span className="nav-toggle__item">Menu</span>
          </button>
        </div>
      </div>
    </header>


   
      <div className="intro" id="intro">
     <div className="container">
         <div className="intro__inner">
             <h2 className="intro__suptitle">This is the</h2>
       <h1 className="intro__title">Page after login</h1>
             
             <ScrollLink className="butn" to="about" smooth={true} duration={500} id="scroll-btn" data-scroll="#about" href="#">Read more</ScrollLink>
        
        
             
         </div> 
     </div> 
   </div>  
    </div>
  
    );
};

export default Home;