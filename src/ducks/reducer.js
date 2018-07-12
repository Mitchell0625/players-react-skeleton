// import axios from 'axios';

// export const BASE_URL = 'https://players-api.developer.alchemy.codes/';
// const LOGIN = 'LOGIN';
// const REGISTER = 'REGISTER';
// const ADD_PLAYER = 'ADD_PLAYER';
// const DELETE_PLAYER = 'DELETE_PLAYER';

// const initialState = {
//   user: {}, //may need to switch to array
//   players: []
// };

// export function login(email, password) {
//   return {
//     type: LOGIN,
//     payload: axios.post(`${BASE_URL}api/user`, { email, password })
//   };
// }
// export function register(
//   firstName,
//   lastName,
//   email,
//   password,
//   confirmPassword
// ) {
//   return {
//     type: REGISTER,
//     payload: axios.post(`${BASE_URL}api/user`, {
//       firstName,
//       lastName,
//       email,
//       password,
//       confirmPassword
//     })
//   };
// }
// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case `${LOGIN}_FULFILLED`:
//       return {
//         ...state,
//         user: action.payload.data
//       };
//     case `${REGISTER}_FULFILLED`:
//       console.log(action);
//       return {
//         ...state,
//         user: action.payload.data
//       };
//     default:
//       return state;
//   }
// }
