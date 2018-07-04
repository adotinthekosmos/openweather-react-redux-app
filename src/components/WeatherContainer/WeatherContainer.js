import React, { Component } from "react";
import "./WeatherContainer.css";
import SearchBar from "./SearchBar/SearchBar";
import WeatherDetail from "./WeatherDetail/WeatherDetail";
class WeatherContainer extends Component {
  render() {
    return (
      <div className="weather-container">
        <div className="bg">
          <img
            className="bg-img"
            src="https://images.unsplash.com/photo-1509085574999-9f0dd537364b?ixlib=rb-0.3.5&s=82862bb020a96fbef3ea9b2c46baedc2&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
          <div className="bg-overlay" />
        </div>
        <div className="weather-content">
          <SearchBar />
          <WeatherDetail />
        </div>
      </div>
    );
  }
}

export default WeatherContainer;
