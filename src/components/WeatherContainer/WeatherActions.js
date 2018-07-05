import WeatherActionTypes from "./WeatherActionTypes";
export const submitCurrentWeather = weather => ({
  type: WeatherActionTypes.submitWeather,
  payload: {
    currentWeather: weather
  }
});

export const submitSearchKeyword = keyword => ({
  type: WeatherActionTypes.submitSearch,
  payload: {
    keyword: keyword
  }
});

export const submitCities = cities => ({
  type: WeatherActionTypes.submitCities,
  payload: {
    cities: cities
  }
});

export const submitCitiesGetStatus = status => ({
  type: WeatherActionTypes.getCitiesGetStatus,
  payload: {
    status: status
  }
});

export const submitCurrentCity = city => ({
  type: WeatherActionTypes.submitCurrentCity,
  payload: {
    currentCity: city
  }
});
