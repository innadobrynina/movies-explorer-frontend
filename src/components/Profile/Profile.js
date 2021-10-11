import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ logout }) {

  const currentUser = React.useContext(CurrentUserContext);
  return (
    <div>
      <Header />
      <section className='profile'>
        <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
        <form className='profile__form'>
          <label className='profile__label'>
            {currentUser.name}
            <input
              className='profile__input'
              required
              name='name'
              type='text'
              placeholder='Inna'
              minLength='2'
              maxLength='40'
            />
          </label>
          <label className='profile__label'>
            {currentUser.email}
            E-mail
            <input
              className='profile__input'
              required
              name='email'
              type='email'
              placeholder='a-ya-dobraya@yandxex.ru'
            />
          </label>
        </form>
        <div className='profile__buttons'>
          <button className='profile__button profile__edit'>Редактировать</button>
          <button className='profile__button profile__logout'
          onClick={logout}
          >
            Выйти из аккаунта
            </button>
        </div>
      </section>
    </div>
  );
}

export default Profile;