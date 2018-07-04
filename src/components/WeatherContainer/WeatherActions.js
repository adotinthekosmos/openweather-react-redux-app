import WeatherActionTypes from "./WeatherActionTypes";
export const submitCurrentWeather = weather => ({
  type: WeatherActionTypes.submitWeather,
  payload: {
    currentWeather: weather
  }
});

export const submitSearchKeyword = keyword => ({
  type: Constants.submitSearch,
  payload: {
    keyword: keyword
  }
});
