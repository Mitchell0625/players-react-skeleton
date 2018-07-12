export const baseUrl = 'https://players-api.developer.alchemy.codes/';
export const user = {};
export const players = [];

export const registerUser = (first, last, email, pass, confirm) => {
  return fetch(`${baseUrl}api/user`, {
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
    .then(resp => resp.json())
    .catch(err => console.log(err.message));
};

export const loginUser = (email, pass) => {
  return fetch(`${baseUrl}api/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: `${email}`,
      password: `${pass}`
    })
  })
    .then(resp => resp.json())
    .catch(err => console.log(err.message));
};

export const addPlayer = (token, firstName, lastName, rating, hand) => {
  return fetch(`${baseUrl}api/players`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      first_name: `${firstName}`,
      last_name: `${lastName}`,
      rating: `${rating}`,
      handedness: `${hand}`
    })
  })
    .then(resp => resp.json())
    .then(data => {
      return [...players, data];
    })
    .catch(err => console.log(err.message));
};

export const getPlayers = token => {
  return fetch(`${baseUrl}api/players`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then(resp => resp.json())
    .catch(err => console.log(err.message));
};

export const deletePlayer = (token, id) => {
  return fetch(`${baseUrl}api/players/${id}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then(resp => resp.json())
    .catch(err => console.log(err.message));
};
