import React    from "react";
import template from "./WeatherWidget.jsx";

class WeatherWidget extends React.Component {
  render() {
    return template.call(this);
  }
}

export default WeatherWidget;
