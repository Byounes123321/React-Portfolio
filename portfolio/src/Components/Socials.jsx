import Insta from "./imgs/Insta.svg";
import linkedin from "./imgs/linkedin.svg";
import github from "./imgs/github.svg";

export default function Socials(){
    return(
        <aside>
        <div className="socials">
            <a href="https://www.instagram.com/bazazel/?hl=en" target="_blank" rel="noreferrer"><img className="social" src={Insta} alt="Instagram"/></a>
            <a href="https://github.com/Byounes123321"target="_blank" rel="noreferrer"><img className="social" src={github} alt="GitHub"/></a>
            <a href="https://www.linkedin.com/in/bassilyounes/"target="_blank" rel="noreferrer"><img className="social" src={linkedin} alt="LinkedIn"/></a>
        </div>
        </aside>
     );
}