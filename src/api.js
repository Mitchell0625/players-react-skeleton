import axios from 'axios';
export const base_url = 'https://players-api.developer.alchemy.codes/';

export const registerUser = (
  firstName,
  lastName,
  email,
  password,
  confirmPassword
) => {
  return axios.post(`${base_url}api/user`, {
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  });
};
