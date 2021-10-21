import './BurgerMenu.css';
import Navigation from '../Navigation/Navigation';

const BurgerMenu = ({ handleMenuClose, isOpen, handleOnSavedMoviesClick, handleOnMoviesClick, onClick }) => {
  return (
    <section className={`burger-menu ${isOpen && 'burger-menu_opened'}`} onClick={onClick}>
      <div className="burger-menu__area">
        <button className="burger-menu__close-btn" onClick={handleMenuClose}></button>
        <Navigation handleOnSavedMoviesClick={handleOnSavedMoviesClick} handleOnMoviesClick={handleOnMoviesClick} />
      </div>
    </section>
  )
}

export default BurgerMenu;