import React, { Component } from "react";
import "./SearchBar.css";
import { connect } from "react-redux";
import { submitCurrentWeather } from "../WeatherActions";
import axios from "axios";
import { submitSearchKeyword } from "../WeatherActions";
import { API_CONFIG } from "./../../../API_CONFIG";
class SearchBar extends Component {
  componentDidMount() {}

  handleSearchSubmit = e => {
    e.preventDefault();
    const keyword = this.getKeyword.value;
    this.props.submitKeyword(keyword);
    if (keyword !== "") {
      axios.get(API_CONFIG.getCurrentWeather(keyword)).then(res => {
        const currentWeather = res.data;
        this.props.submitCurrentWeather(currentWeather);
        console.log(this.props.stateStore.currentWeather);
        console.log(this.props.stateStore.currentWeather.main.temp);
      });
    }
  };

  render() {
    return (
      <form className="search-container" onSubmit={this.handleSearchSubmit}>
        <input type="text" ref={input => (this.getKeyword = input)} />
        <button>
          <i className="icon ion-ios-search" />
        </button>
        <div className="search-indicator-line" />
        <div className="clear-fix" />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  stateStore: state.WeatherReducers
});

const mapDispatchToProps = dispatch => {
  return {
    submitCurrentWeather: weather => {
      dispatch(submitCurrentWeather(weather));
    },
    submitKeyword: keyword => {
      dispatch(submitSearchKeyword(keyword));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
