class Api {
  constructor({ baseMovieUrl, authorization }) {
    this._baseUrl = baseMovieUrl;
    this._token = authorization;
  }

  _checkResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getMovie() {
    return fetch(this._baseUrl)/* , {
      method: 'GET',
      headers: this._headers
    }) */
      .then(this._checkResponse)
  }
}

const moviesApi = new Api({
  baseMovieUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  /* headers: {
    'Content-Type': 'application/json',
  }, */
})

export default moviesApi;