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
    <div className='home'>
    <div className='welcome'>
    <header className="header" id="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <ScrollLink to="intro" smooth={true} duration={500}>Parter</ScrollLink>
          </div>

          <nav className="nav" id="nav">
            <ScrollLink className="nav__link" to="about" smooth={true} duration={500}>About Us</ScrollLink>
            <ScrollLink className="nav__link" to="assortment" smooth={true} duration={500}>Events</ScrollLink>
            <ScrollLink className="nav__link" to="delivery" smooth={true} duration={500}>Application</ScrollLink>
            <ScrollLink className="nav__link" to="footer" smooth={true} duration={500}>Contacts</ScrollLink>
           
            <RouterLink className="nav__link" to="/addevent">Add Event</RouterLink>

            <RouterLink className="nav__link" to="/">Log Out</RouterLink>
          </nav>

          <button className="nav-toggle" id="navtoggle" type="button">
            <span className="nav-toggle__item">Menu</span>
          </button>
        </div>
      </div>
    </header>
    </div>
</div>
    );
};

export default Home;