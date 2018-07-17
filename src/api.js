export const baseUrl = 'https://players-api.developer.alchemy.codes/';


export const logout = () => {
  localStorage.removeItem('token');
};

export const logged = () => {
  const token = localStorage.getItem('token');
  return token;
};

export const registerUser = (first, last, email, pass, confirm) =>
  new Promise((resolve, reject) => {
    fetch(`${baseUrl}api/user`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: `${first}`,
        last_name: `${last}`,
        email: `${email}`,
        password: `${pass}`,
        confirm_password: `${confirm}`
      })
    })
      .then(resp => resolve(resp.json()))
      .catch((err) => {
        reject(err);
      });
  });

export const loginUser = (email, pass) =>
  new Promise((resolve, reject) => {
    fetch(`${baseUrl}api/login`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: `${email}`,
        password: `${pass}`
      })
    })
      .then(resp => resolve(resp.json()))
      .catch((err) => {
        reject(err);
      });
  });

export const addPlayer = (firstName, lastName, rating, hand) => new Promise((resolve, reject) => {
  fetch(`${baseUrl}api/players`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${logged()}`
    },
    body: JSON.stringify({
      first_name: `${firstName}`,
      last_name: `${lastName}`,
      rating: `${rating}`,
      handedness: `${hand}`
    })
  })
    .then(resp => resolve(resp.json()))
    .catch((err) => {
      reject(err);
    });
});

export const getPlayers = () =>
  new Promise((resolve, reject) => {
    fetch(`${baseUrl}api/players`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${logged()}`
      }
    })
      .then(resp => resolve(resp.json()))
      .catch((err) => {
        reject(err);
      });
  });

export const deletePlayer = id =>
  new Promise((resolve, reject) => {
    fetch(`${baseUrl}api/players/${id}`, {
      method: 'delete',
      headers: {
        Authorization: `Bearer ${logged()}`
      }
    })
      .then(resp => resolve(resp.json()))
      .catch((err) => {
        reject(err);
      });
  });
