import WeatherActionTypes from "./WeatherActionTypes";
const WeatherReducers = (
  state = {
    currentWeather: {
      coord: {
        lon: "N/A",
        lat: "N/A"
      },
      weather: [
        {
          id: "N/A",
          main: "N/A",
          description: "N/A",
          icon: "50n"
        }
      ],
      base: "N/A",
      main: {
        temp: "N/A",
        pressure: "N/A",
        humidity: "N/A",
        temp_min: "N/A",
        temp_max: "N/A"
      },
      visibility: "N/A",
      wind: {
        speed: "N/A",
        deg: "N/A"
      },
      clouds: {
        all: "N/A"
      },
      dt: "N/A",
      sys: {
        type: "N/A",
        id: "N/A",
        message: "N/A",
        country: "N/A",
        sunrise: "N/A",
        sunset: "N/A"
      },
      id: "N/A",
      name: "N/A",
      cod: "N/A"
    },
    keyword: "",
    cities: { all: [] },
    citiesGetStatus: false,
    currentCity: ""
  },
  action
) => {
  switch (action.type) {
    case WeatherActionTypes.submitWeather: {
      return {
        ...state,
        currentWeather: action.payload.currentWeather
      };
    }

    case WeatherActionTypes.submitKeyword: {
      return {
        ...state,
        keyword: action.payload.keyword
      };
    }
    case WeatherActionTypes.submitCities: {
      return {
        ...state,
        cities: action.payload.cities
      };
    }

    case WeatherActionTypes.getCitiesGetStatus: {
      return {
        ...state,
        citiesGetStatus: action.payload.status
      };
    }

    case WeatherActionTypes.submitCurrentCity: {
      return {
        ...state,
        currentCity: action.payload.currentCity
      };
    }
    default:
      return state;
  }
};

export default WeatherReducers;
