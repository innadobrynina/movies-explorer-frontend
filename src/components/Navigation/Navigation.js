import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import account from '../../images/account-logo.svg';

function Navigation() {

  return (
    <div className='navigation'>
      <nav className='navigation__menu'>
        <ul className='navigation__links'>
          <NavLink
            to='/'
            className='navigation__link'
          >
            Главная
          </NavLink>
          <NavLink
            to='/movies'
            className='navigation__link'
            activeClassName='navigation__link_active'
          >
            Фильмы
          </NavLink>
          <NavLink
            to='/saved-movies'
            className='navigation__link'
            activeClassName='navigation__link_active'
          >
            Сохранённые фильмы
          </NavLink>
        </ul>
        <NavLink
          to='/profile'
          className='header__link'
          activeClassName='header__link_active'
        >
          <div className='header__container-account'>
            <p className='header__account-name'>Аккаунт</p>
            <img className='header__account-logo' src={account} alt='Ярлык аккаунта' />
          </div>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;