/* class MoviesApi {
  constructor(url) {
    this._url = url;
  } */

  export const getMovies =() => {
    return fetch('https://api.nomoreparties.co/beatfilm-movies', {
      method: 'GET',
     /*  headers: {
                'Content-type': 'application/json'
            } */
          }).then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(new Error(`Ошибка: ${response.status}`));
        });
  }

//export default new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');