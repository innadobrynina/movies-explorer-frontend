class MoviesApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  getMovies() {
    return fetch(this._baseUrl, {
      method: 'GET',
      headers: {
                'Content-type': 'application/json'
            }
          }).then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(new Error(`Ошибка: ${response.status}`));
        });
  }
}

export default new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');