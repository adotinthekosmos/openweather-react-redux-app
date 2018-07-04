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
            src="https://images.unsplash.com/photo-1429516387459-9891b7b96c78?ixlib=rb-0.3.5&s=8c3977bcea5ea8b245e34a7c030b7a8a&auto=format&fit=crop&w=1350&q=80"
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
