class Api {
  constructor({ baseUrl, authorization }) {
    this._baseUrl = baseUrl;
    this._token = authorization;
  }

  _checkResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getSavedMovies() {
    console.log('this._token', this._token);
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      }
    })
      .then(this._checkResponse)
  }

  getProfileInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then(this._checkResponse);
  }

  setProfileInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    })
      .then(this._checkResponse);
  }

  saveMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image.url ? `https://api.indob-diploma.nomoreparties.co${data.image.url}` : data.image,
        trailer: data.trailerLink ? data.trailerLink : 'https://yandex.ru',
        thumbnail: data.trailerLink ? data.trailerLink : 'https://yandex.ru',
        movieId: data.id || data.movieId,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    })
      .then(this._checkResponse);
  }

  unsaveMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      },
    })
      .then(this._checkResponse);
  }

  changeToken(token) {
    this._token = `Bearer ${token}`
  }
}

const mainApi = new Api({
  // baseUrl: 'https://api.indob-diploma.nomoredomains.club',
  baseUrl: 'http://localhost:3001',
})

export default mainApi;