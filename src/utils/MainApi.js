class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Credentials': true,
      },
        body: JSON.stringify(name, email, password)
      })
      .then(res => {
        return this._getResponseData(res);
      })
  };

  authorize(email, password) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Credentials': true,
      },
      credentials: 'include',
      body: JSON.stringify({ password, email })
    })
    .then(res => {
      return this._getResponseData(res);
    })
  };

  quit() {
    return fetch(`${this._url}/signout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Credentials': true,
    },
      credentials: 'include',
    })
      .then((res) => {
        return this._getResponseData(res);
      })
  };

  getPersonInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => { return this._getResponseData(res);
  })
};

getProfileInfo(name, email) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: 'PATCH',
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
      .then(res => { return this._getResponseData(res);
    });
}

  getInitialCards() {
    return fetch(`${this._url}/movies`, {
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => {
        return this._getResponseData(res);
    });
}

  addCard(data) {
      return fetch(`${this._url}/movies`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            country: data.country,
            director: data.director,
            duration: data.duration,
            year: data.year,
            description: data.description,
            image: data.image,
            trailer: data.trailer,
            thumbnail: data.image,
            movieId: data.movieId,
            nameRU: data.nameRU,
            nameEN: data.nameEN,
        })
      })
        .then(res => {return this._getResponseData(res);
  })
}

  removeCard(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => {
      if (res.ok) {
          return Promise.resolve("done");
      }
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
  })
  }

  checkToken() {
    return fetch(`${this._url}/users/me`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Credentials': true,
      }
    })
    .then(res => { return this._getResponseData(res);
    })
  };
}

export default new MainApi({url: `http://localhost:3000`});
//export default new MainApi({url: `https://api.indob-diploma.nomoredomains.club/`});
