export const BASE_URL_MOVIE = 'https://api.nomoreparties.co';
class MoviesApi {
  constructor(options) {
    this.baseUrl = options.baseMovieUrl;
  }

  _getResponseData(res) {
    if (res.ok) return res.json();
    return Promise.reject(new Error(`Ошибка ${res.status}`));
  }

  getBeatFilmMovies() {
    return fetch(`${this.baseUrl}/beatfilm-movies`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => this._getResponseData(res));
  }
}

const moviesApi = new MoviesApi({
  baseMovieUrl: BASE_URL_MOVIE
});

export default moviesApi;