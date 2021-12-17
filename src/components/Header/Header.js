import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

function Header({onClose, isOpen, onMenuBtnClick, loggedIn }) {
  return (
    <header  className={`header ${!loggedIn ? "header_unauth" : ''}`}>
        <Logo />
        <Navigation
            loggedIn={loggedIn}
            isOpen={isOpen}
            onClose={onClose}
            onMenuBtnClick={onMenuBtnClick}
            />
    </header>
  );
}

export default Header;