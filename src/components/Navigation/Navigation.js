import { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import account from '../../images/account-logo.svg'
import './Navigation.css';

const Navigation = ({ handleOnSavedMoviesClick, handleOnMoviesClick }) => {
  const [isMoviesClicked, setIsMoviesClicked] = useState(false);
  const [isSavedMoviesClicked, setIsSavedMoviesClicked] = useState(false);
  const [isMainClicked, setIsMainClicked] = useState(false);

  const handleMoviesClick = () => {
    handleOnMoviesClick();
    setIsMoviesClicked(true);
    setIsSavedMoviesClicked(false);
    setIsMainClicked(false);
  }

  const handleSavedMoviesClick = () => {
    handleOnSavedMoviesClick();
    setIsSavedMoviesClicked(true);
    setIsMoviesClicked(false);
    setIsMainClicked(false);
  }

  const handleMainClicked = () => {
    setIsMainClicked(true);
    setIsSavedMoviesClicked(false);
    setIsMoviesClicked(false);
  }
  return (
    <nav className="nav">
      <div className="nav__options">
        <Link to="/" className={`nav__link nav__link_type_main ${isMainClicked && 'nav__link_active'}`}
          onClick={handleMainClicked}>Главная</Link>
        <div className="nav__movies">
          <Link to="/movies" className={`nav__link ${isMoviesClicked && 'nav__link_active'}`}
            onClick={handleMoviesClick}>Фильмы</Link>
          <Link to="/saved-movies" className={`nav__link ${isSavedMoviesClicked && 'nav__link_active'}`}
            onClick={handleSavedMoviesClick}>Сохраненные фильмы</Link>
        </div>
        <Link to="/profile" className="nav__account">
          Аккаунт
          <img className="nav__account-img" src={account} alt="Аккаунт" />
        </Link>
      </div>
    </nav>
  )
}

export default Navigation;