import resume from './Resume.pdf';
function Nav(){
    return (
        <nav class="nav">
        <span class="mainNav">
          <ul class="navlinks">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href={resume} rel="noreferrer" target="_blank">
            <div class="btn">
              <div class="text">Resume</div>
            </div>
          </a>
        </span>
        <div class="hamMenu" >
          <label for="check">
            <input type="checkbox" id="check" />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div class="mobileNav"> 
          <ul class="navlinks" id="NavLinks">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div class="btnContainer">
            <a href="./Resources/ResumeWebDev-2023 (2).pdf" target="_blank">
            <div class="btn">
              <div class="text">Resume</div>
            </div>
          </a>
        </div>
        </div>
      </nav>
    )
}

export default Nav;