export const baseUrl = 'https://players-api.developer.alchemy.codes/';
export const user = {};
export const players = [];
export const token = localStorage.getItem('token');

export const registerUser = ((first, last, email, pass, confirm) => fetch(`${baseUrl}api/user`, {
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
  .catch(err => console.log(err.message)));

export const loginUser = (email, pass) => fetch(`${baseUrl}api/login`, {
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

export const addPlayer = (firstName, lastName, rating, hand) => fetch(`${baseUrl}api/players`, {
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
  .then(data => [...players, data])
  .catch(err => console.log(err.message));

export const getPlayers = () => fetch(`${baseUrl}api/players`, {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
})
  .then(resp => resp.json())
  .catch(err => console.log(err.message));

export const deletePlayer = id => fetch(`${baseUrl}api/players/${id}`, {
  method: 'delete',
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(resp => resp.json())
  .catch(err => console.log(err.message));
