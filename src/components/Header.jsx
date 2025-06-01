function Header({ scrollToAbout, scrollToProjects }) {
  return (
    <nav id="navbar">
      <ul id="header-layout">
        <li id="navbar-name"><h2>MAGNUS OLSSON</h2></li>
        <li><button className="navbar-button" onClick={scrollToAbout}>About</button></li>
        <li><button className="navbar-button" onClick={scrollToProjects}>Projects</button></li>
      </ul>
    </nav>
  );
}

export default Header;
