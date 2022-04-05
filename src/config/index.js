export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://can-of-worms-api.herokuapp.com/'
    : 'http://localhost:8080';