import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart.js';

class WeatherList extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    return (
      <tr key={cityName}>
        <td>{cityName}</td>
        <td><Chart color='blue' data={temps} /></td>
        <td><Chart color='orange' data={pressure} /></td>
        <td><Chart color='green' data={humidity} /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
