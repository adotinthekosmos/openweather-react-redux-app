export const API_CONFIG = {
  getCurrentWeather: keyword =>
    `http://api.openweathermap.org/data/2.5/weather?q=${keyword}&APPID=ce7d78e83d78a38a2f88bbb62c3467db`,
  getCities: () => `http://10.88.17.71:1880/api/getcities`
};
