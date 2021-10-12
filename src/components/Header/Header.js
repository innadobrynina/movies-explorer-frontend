import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header(props) {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }


  return (
    <header className={`header ${props.loggedIn ? "header_logged-in" : ''}`}>
      <Logo />
      <Navigation loggedIn={props.loggedIn} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}

export default Header;