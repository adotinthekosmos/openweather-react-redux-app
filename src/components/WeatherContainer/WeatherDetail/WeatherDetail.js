import React, { Component } from "react";
import "./WeatherDetail.css";
import { connect } from "react-redux";

class WeatherDetail extends Component {
  render() {
    console.log(this.props.stateStore.currentWeather);
    const currentWeather = this.props.stateStore.currentWeather;

    return (
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
    );
  }
}

const mapStateToProps = state => ({
  stateStore: state.WeatherReducers
});

export default connect(mapStateToProps)(WeatherDetail);
