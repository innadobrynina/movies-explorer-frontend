import React from 'react';
import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import validator from 'validator';

function Login(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  //Валидация
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [isEmailError, setIsEmailError] = React.useState(false);
  const [isPasswordError, setIsPasswordError] = React.useState(false);
  const [isSubmitValid, setIsSubmitValid] = React.useState(false);

  //ClassName
  const emailInputClassName = (
    `login__form-input ${isEmailError ? 'login__form-input_error' : ''}`
  );

  const passwordInputClassName = (
    `login__form-input ${isPasswordError ? 'login__form-input_error' : ''}`
  );

function handleSubmit(e) {
    e.preventDefault();

    props.onLogin({ email, password });
  }

  function handleEmailInputChange(e) {
    setEmail(e.target.value);

    handleValidation(e);
  }

  function handlePasswordInputChange(e) {
    setPassword(e.target.value);

    handleValidation(e);
  }

  function handleValidation(e) {
    const inputElement = e.target;

    switch (inputElement.name) {
      case 'email': {
        if (!inputElement.validity.valid || !validator.isEmail(inputElement.value)) {
          setIsEmailError(true);
          setEmailError(inputElement.validationMessage);
          return;
        }
        setIsEmailError(false);
        setEmailError('');
        break;
      }
      case 'password': {
        if (!inputElement.validity.valid) {
          setIsPasswordError(true);
          setPasswordError(inputElement.validationMessage);
          return;
        }
        setIsPasswordError(false);
        setPasswordError('');
        break;
      }
      default: { }
    }
  }

  React.useEffect(() => {
    if (isEmailError || isPasswordError) return setIsSubmitValid(false);
    return setIsSubmitValid(true);
  }, [isEmailError, isPasswordError, email, password])

  React.useEffect(() => {
    setIsEmailError(true);
    setIsPasswordError(true);
    setIsSubmitValid(false);
  }, [])

  return (
  <section className='sign'>
    <Link to='/' className='sign__start-page'>
      <img className='sign__logo-image' src={logo} alt='Логотип' />
    </Link>
    <h2 className='sign__title'>Рады видеть!</h2>
    <form className='sign__form'
    onSubmit={handleSubmit}
    >
      <label className='sign__label'>
        E-mail
        <input
          className={emailInputClassName}
          required
          name='email'
          type='email'
          placeholder=''
          onChange={handleEmailInputChange}
          value={email}
        />
        <p className="login__form-error">{emailError}</p>
      </label>
      <label className='sign__label'>
        Пароль
        <input
          className={passwordInputClassName}
          required
          name='password'
          type='password'
          minLength='2'
          maxLength='40'
          onChange={handlePasswordInputChange}
          value={password}
          
        />
        <p className="login__form-error">{passwordError}</p>
      </label>
    
    <button className='sign__button'
    type='submit'
    disabled={!isSubmitValid || props.isLoading}
    >
      Войти
      </button>
      </form>
    <div className='sign__toggle'>
      <p className='sign__text'>Ещё не зарегистрированы?</p>
      <Link className='sign__link' to='/signup'>Регистрация</Link>
    </div>
  </section>
  );
};

export default Login;