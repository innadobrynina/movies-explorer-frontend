import './Header.css';
import logo from '../../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} className="header__logo" alt="Логотип" />
        <div className="header__container-panel">
            <button className="header__container-panel__signup">Регистрация</button>
            <button className="header__container-panel__signin">Войти</button>
        </div>
      </div>
    </header>
  );
}

export default Header;