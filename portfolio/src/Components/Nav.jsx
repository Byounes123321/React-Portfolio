import resume from "./imgs/Resume.pdf";
import HamMenu from "./HamMenu";

function Nav({ isMobile }) {
  return (
    <nav class="nav">
      <span class="mainNav">
        <ul class="navlinks">
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
        <a href={resume} rel="noreferrer" target="_blank">
          <div class="btn">
            <div class="text">Resume</div>
          </div>
        </a>
      </span>
      <HamMenu isMobile />
    </nav>
  );
}

export default Nav;
