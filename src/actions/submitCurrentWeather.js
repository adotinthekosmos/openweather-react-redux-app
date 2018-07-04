import Constants from "../constants/constants";

const submitCurrentWeather = weather => ({
  type: Constants.submitWeather,
  payload: {
    currentWeather: weather
  }
});

export default submitCurrentWeather;
