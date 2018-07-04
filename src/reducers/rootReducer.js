import Constants from "../constants/constants";
const rootReducer = (
  state = {
    redirectToReferrer: false,
    fieldIsEmpty: true,
    currentWeather: {
      coord: {
        lon: "no-data",
        lat: "no-data"
      },
      weather: [
        {
          id: "no-data",
          main: "no-data",
          description: "no-data",
          icon: "no-data"
        }
      ],
      base: "no-data",
      main: {
        temp: "no-data",
        pressure: "no-data",
        humidity: "no-data",
        temp_min: "no-data",
        temp_max: "no-data"
      },
      visibility: "no-data",
      wind: {
        speed: "no-data",
        deg: "no-data"
      },
      clouds: {
        all: "no-data"
      },
      dt: "no-data",
      sys: {
        type: "no-data",
        id: "no-data",
        message: "no-data",
        country: "no-data",
        sunrise: "no-data",
        sunset: "no-data"
      },
      id: "no-data",
      name: "no-data",
      cod: "no-data"
    },
    keyword: ""
  },
  action
) => {
  switch (action.type) {
    case Constants.authLogin: {
      return {
        ...state,
        redirectToReferrer: action.payload.redirectToReferrer,
        fieldIsEmpty: action.payload.fieldIsEmpty
      };
    }

    case Constants.submitWeather: {
      return {
        ...state,
        currentWeather: action.payload.currentWeather
      };
    }

    case Constants.submitKeyword: {
      return {
        ...state,
        keyword: action.payload.keyword
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
