import React, { Component } from "react";
import "./SearchBar.css";
import { connect } from "react-redux";
import submitCurrentWeather from "../../../actions/submitCurrentWeather";
import axios from "axios";
import getCurrentWeatherLocationAPI from "./../../../api-config/getCurrentWeatherLocationAPI";
import submitSearchKeyword from "./../../../actions/submitSearchKeyword";
class SearchBar extends Component {
  componentDidMount() {}

  handleSearchSubmit = e => {
    e.preventDefault();
    const keyword = this.getKeyword.value;
    this.props.submitKeyword(keyword);
    if (keyword !== "") {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${keyword}&APPID=ce7d78e83d78a38a2f88bbb62c3467db`
        )
        .then(res => {
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
  stateStore: state
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
