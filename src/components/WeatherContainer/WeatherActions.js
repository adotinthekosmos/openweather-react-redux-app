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
