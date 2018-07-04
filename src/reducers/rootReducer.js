import { combineReducers } from "redux";
import LoginReducers from "../components/Login/LoginReducers";
import WeatherReducers from "../components/WeatherContainer/WeatherReducers";
// import Constants from "../constants/constants";
// const rootReducer = (
//   state = {
//     redirectToReferrer: false,
//     fieldIsEmpty: true,
//     currentWeather: {
//       coord: {
//         lon: -73.99,
//         lat: 40.73
//       },
//       weather: [
//         {
//           id: 701,
//           main: "Mist",
//           description: "mist",
//           icon: "50n"
//         }
//       ],
//       base: "stations",
//       main: {
//         temp: 297.06,
//         pressure: 1025,
//         humidity: 88,
//         temp_min: 295.15,
//         temp_max: 299.15
//       },
//       visibility: 9656,
//       wind: {
//         speed: 1.61,
//         deg: 155.009
//       },
//       clouds: {
//         all: 1
//       },
//       dt: 1530687360,
//       sys: {
//         type: 1,
//         id: 2121,
//         message: 0.0089,
//         country: "US",
//         sunrise: 1530696615,
//         sunset: 1530750626
//       },
//       id: 5128581,
//       name: "New York",
//       cod: 200
//     },
//     keyword: ""
//   },
//   action
// ) => {
//   switch (action.type) {
//     case Constants.authLogin: {
//       return {
//         ...state,
//         redirectToReferrer: action.payload.redirectToReferrer,
//         fieldIsEmpty: action.payload.fieldIsEmpty
//       };
//     }

//     case Constants.submitWeather: {
//       return {
//         ...state,
//         currentWeather: action.payload.currentWeather
//       };
//     }

//     case Constants.submitKeyword: {
//       return {
//         ...state,
//         keyword: action.payload.keyword
//       };
//     }

//     default:
//       return state;
//   }
// };

// export default rootReducer;

const rootReducer = combineReducers({ LoginReducers, WeatherReducers });

export default rootReducer;
