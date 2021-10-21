import './Header.css';
import { NavLink as Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Header = ({ pathname, isLoggedIn, handleMenuOpen, handleOnSavedMoviesClick, handleOnMoviesClick }) => {
  const headerClassName = (
    `header 
    ${(pathname === '/movies' || pathname === '/saved-movies' || pathname==='/profile') && 'header_logged-in'}
     ${pathname=== '/' && 'header_visible'}
    `
)

  return (
    <header className={headerClassName}>
      <div className="header__container">
        <Link to="/" className="header__logo"/>
        {
          !isLoggedIn && pathname === '/' ?
            <nav className="header__options">
              <Link to="/signup" className="header__option header__option_to-register">Регистрация</Link>
              <Link to="/signin" className="header__option header__option_to-login">Войти</Link>
            </nav> :
            <div className="header__nav">
              <Navigation handleOnSavedMoviesClick={handleOnSavedMoviesClick} handleOnMoviesClick={handleOnMoviesClick} />
            </div>
        }
        {isLoggedIn && <button className="header__menu-btn" type="button" onClick={handleMenuOpen}></button>}
      </div>
    </header>
  );
}

export default Header;