import React, { Component } from "react";
import "./WeatherDetail.css";
import { connect } from "react-redux";
import axios from "axios";
import { API_CONFIG } from "./../../../API_CONFIG";
import { submitCities } from "./../WeatherActions";
import { submitCitiesGetStatus } from "./../WeatherActions";
import { submitCurrentWeather } from "./../WeatherActions";
import { submitCurrentCity } from "./../WeatherActions";
class WeatherDetail extends Component {
  componentWillMount() {
    axios.get(API_CONFIG.getCities()).then(res => {
      const cities = res.data;
      console.log(cities);
      this.props.submitCities(cities);
      //if api get cities success then set citiesGetStatus in store to true
      if (this.props.stateStore.cities.all !== []) {
        this.props.submitCitiesGetStatus(true);
      }

      //get first city on start
      if (this.props.stateStore.citiesGetStatus) {
        axios.get(API_CONFIG.getCurrentWeather(cities.all[0])).then(res => {
          const currentWeather = res.data;
          this.props.submitCurrentWeather(currentWeather);
        });
      }
    });
  }

  handleDropDownClick = (e, city) => {
    //only get get current weather api if the return flag of getCities is true
    console.log(city);
    if (this.props.stateStore.citiesGetStatus) {
      axios.get(API_CONFIG.getCurrentWeather(city)).then(res => {
        const currentWeather = res.data;
        this.props.submitCurrentWeather(currentWeather);
        console.log("In weather detail:");
        console.log(this.props.stateStore.currentWeather);
        console.log(this.props.stateStore.currentWeather.main.temp);
      });
      this.props.submitCurrentCity(city);
    }
  };

  render() {
    const currentWeather = this.props.stateStore.currentWeather;
    const currentCity = this.props.stateStore.currentCity;
    console.log(this.props.stateStore.currentCity);
    console.log(`(render)cities:${this.props.stateStore.cities.all}`);
    return (
      <div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-danger dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {currentCity === ""
              ? this.props.stateStore.cities.all[0]
              : currentCity}
          </button>
          <div className="dropdown-menu">
            {this.props.stateStore.cities.all.map((city, index) => (
              <a
                className="dropdown-item"
                key={index}
                onClick={e => this.handleDropDownClick(e, city)}
              >
                {city}
              </a>
            ))}
          </div>
        </div>
        <div className="weather-detail-container">
          <div className="widget">
            <div className="main-icon">
              <img
                src={`http://openweathermap.org/img/w/${
                  currentWeather.weather[0].icon
                }.png`}
                alt=""
              />
              <div className="icon-overlay" />
            </div>

            <div className="detail-container">
              <div className="weather-detail-content">
                <p className="date">{Date(currentWeather.dt * 1000)}</p>
                <h1 className="location">{currentWeather.name}</h1>
                <div>
                  <div className="temperature">
                    <span className="current-temp">
                      {currentWeather.main.temp + "°F"}
                    </span>
                    <span className="highest-temp">
                      {currentWeather.main.temp_max + "°F"}
                    </span>
                    <span className="lowest-temp">
                      {currentWeather.main.temp_min + "°F"}
                    </span>
                    <div className="clear-fix" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="weather-spec">
            <div className="spec-box wind">
              <div className="spec">
                <p>
                  <i className="wi wi-strong-wind" />
                </p>
                <p>Wind</p>
                <p className="spec-detail">{`${
                  currentWeather.wind.speed
                }  m/h`}</p>
              </div>
            </div>
            <div className="spec-box general">
              <div className="spec">
                <p className="general-icon">
                  <i className="icon ion-ios-body" />
                </p>
                <p>General</p>
                <p className="spec-detail">
                  {currentWeather.weather[0].description}
                </p>
              </div>
            </div>
            <div className="spec-box pressure">
              <div className="spec">
                <p>
                  <i className="wi wi-barometer" />
                </p>
                <p>Pressure</p>
                <p className="spec-detail">
                  {currentWeather.main.pressure + " hpa"}
                </p>
              </div>
            </div>
            <div className="spec-box humidity">
              <div className="spec">
                <p>
                  <i className="wi wi-humidity" />
                </p>
                <p>Humidity</p>
                <p className="spec-detail">
                  {currentWeather.main.humidity + "%"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stateStore: state.WeatherReducers
});

const mapDispatchToProps = dispatch => ({
  submitCities: cities => {
    dispatch(submitCities(cities));
  },
  submitCitiesGetStatus: status => {
    dispatch(submitCitiesGetStatus(status));
  },
  submitCurrentWeather: weather => {
    dispatch(submitCurrentWeather(weather));
  },
  submitCurrentCity: city => {
    dispatch(submitCurrentCity(city));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherDetail);
