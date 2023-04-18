import Logo from './Logo.png';
import Nav from './Nav';

function Header() {
  return (
    <header className="header sticky">
      <div className="logo">
        <a href="/">
            <img src={Logo} title="logo" alt="logo for bassilyounes"/>
        </a>
      </div>
      <Nav />
    </header>
  );
}

export default Header;