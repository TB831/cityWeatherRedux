import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart.js';
import GoogleMap from '../components/GoogleMaps.js';

class WeatherList extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const farenheit = cityData.list.map(weather => (weather.main.temp * (9/5) - 459));
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={cityName}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart color='blue' data={farenheit} units='F' /></td>
        <td><Chart color='orange' data={pressure} units='hPa' /></td>
        <td><Chart color='green' data={humidity} units='%' /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>5 day Temperature(F)</th>
            <th>5 day Pressure(hPa)</th>
            <th>5 day Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
