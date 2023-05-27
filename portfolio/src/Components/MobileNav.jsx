import React from "react";

export default function MobileNav() {
  var isClicked = false;
  var checkElement = document.getElementById("check");
  var mNavElements = document.getElementsByClassName("mNav");
  // var navLinks = document.getElementById('navLinks');
  var navLinks = document.querySelectorAll("#navLinks li a");

  // Function to check if the page is in desktop mode
  function isDesktopMode() {
    return window.innerWidth >= 1025;
  }

  // Function to handle the display toggle
  function toggleDisplay() {
    if (isDesktopMode()) {
      mNavElements[0].style.display = "none";
    } else {
      if (!isClicked) {
        mNavElements[0].style.display = "none";
        checkElement.checked = false;
        isClicked = true;
      } else {
        mNavElements[0].style.display = "block";
        checkElement.checked = true;
        isClicked = false;
      }
    }
  }

  if (checkElement && mNavElements.length > 0) {
    toggleDisplay(); // Call the function initially to set the display
    console.log("MobileNav.jsx: MobileNav is loaded");
    mNavElements[0].style.display = "none";
    checkElement.addEventListener("click", toggleDisplay);
    navLinks.forEach((link) => {
      link.addEventListener("click", toggleDisplay);
    });
  }

  return (
    <nav className="mNav">
      <div className="mobileNav">
        <ul className="navlinks" id="NavLinks">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="btnContainer">
          <a href="./Resources/ResumeWebDev-2023 (2).pdf" target="_blank">
            <div className="btn">
              <div className="text">Resume</div>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}
