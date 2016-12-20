import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/GoogleMap';


class WeatherList extends Component {
    renderTogetherArr(){
       const arr = [];
        for(let i=0;i<this.props.cities.length;i++){
            arr.push([]);
            arr[i].push(this.props.cities[i]);
            arr[i].push(this.props.weather[i]);
            
        }
        
        return arr;
    }
    renderWeather(cityData){
       
        
        if(cityData[1]){
            if(cityData[1].forecast) {
                const {name,lat,lon} = cityData[0];
                const dayTemps = cityData[1].forecast.simpleforecast.forecastday.map(data=>data.high.celsius);
                const nightTemps = cityData[1].forecast.simpleforecast.forecastday.map(data=>data.low.celsius);


                return (
                <tr key={name}>
                <td><GoogleMap lon={+lon} lat={+lat}/></td>
                <td><Chart data={dayTemps} color={"orange"}/></td>
                <td><Chart data={nightTemps} color={"blue"}/></td>

                </tr>
                );
            } else {
                return(<tr key={name}>
                <td>Can't show weather.
                Please select existing city</td>
                </tr>);
                }
            }
        }
    
    render() {
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>                        
                        <th>Day temperature</th>
                        <th>Night temperature</th>      
                    </tr>
                </thead>
                <tbody>
                    {this.renderTogetherArr().map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}
//weather[0].hourly_forecase   temp.metric

function mapStateToProps(state){
    return {
    cities: state.weather.cityList,
        weather: state.weather.weatherList
  }
    
}

export default connect(mapStateToProps)(WeatherList);