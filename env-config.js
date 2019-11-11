const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://movie-next-js.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE' : 'https://movie-next-js.herokuapp.com'
}