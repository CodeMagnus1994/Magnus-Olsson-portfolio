function Header({ scrollToAbout, scrollToProjects }) {
  return (
    <nav id="navbar">
      <h2 id="navbar-name">MAGNUS OLSSON</h2>
      <ul id="ul-navbar" style={{display: 'flex', listStyle: 'none'}}>
        <li><button className="navbar-button" onClick={scrollToAbout}>About</button></li>
        <li><button className="navbar-button" onClick={scrollToProjects}>Projects</button></li>
      </ul>
    </nav>
  );
}

export default Header;