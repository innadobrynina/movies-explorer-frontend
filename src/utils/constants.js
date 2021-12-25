const shortFilmCheckbox = 'shortFilmCheckbox';
const movieInput = "movieInput";
const registerSuccessMessage = 'Вы успешно зарегистрированы!';
const failMessage = 'Произошла ошибка! Попробуйте ещё раз.';
const updateSuccessMessage = 'Данные успешно обновлены!';
const loginErrorMessage = 'Почта или пароль введены не верно. Попробуйте еще раз!'
const movieSearchFailedMessage = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

const defaultProp = 'default';

export const PAGE_MAIN = '/';
export const PAGE_MOVIES = '/movies';
export const PAGE_MOVIES_COLLECTION = '/saved-movies';
export const PAGE_PROFILE = '/profile';
export const PAGE_LOGIN = '/signin';
export const PAGE_REGISTRATION = '/signup';

export { shortFilmCheckbox, movieInput, registerSuccessMessage,
  failMessage, updateSuccessMessage, loginErrorMessage, movieSearchFailedMessage, defaultProp
};
