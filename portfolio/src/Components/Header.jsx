import React, { useState, useEffect } from "react";
import Logo from "./imgs/Logo.png";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
// import isClicked from "./HamMenu";

function Header(isMobile) {
  const [isSticky, setIsSticky] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      setPrevScrollPos(currentScrollPos);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header className={isSticky ? "header sticky" : "header"}>
      <div className="logo">
        <a href="/">
          <img src={Logo} title="logo" alt="logo for bassilyounes" />
        </a>
      </div>
      <Nav isMobile />
      <MobileNav isMobile />
    </header>
  );
}

export default Header;
