import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getCity, fetchWeather, addCity} from '../actions/index';

class SearchBar extends Component {
  constructor() {
    super();    

    this.state = {
        city: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    
  }
  onInputChange(event){
    this.setState({
        city: this.refs.citySearch.value
    });
    this.props.getCity(this.refs.citySearch.value);
      
  }
  onCityClick(city){
    this.props.addCity(city);
    this.props.fetchWeather(city.zmw);
    this.refs.citySearch.value = '';
      this.setState({
        city: ''
    });
  }

  render() {

      let cities = this.props.cities;
      let showCitiesList = ()=>{
          if(cities.length>0 && this.state.city.length > 0){
            return  cities.map((city)=> <li className="list-group-item input-dropdown-menu" onClick={()=>this.onCityClick(city)} key={city.name}>{city.name}</li>)
          }
        }
      return (
      <div className="search-input">
        <input
            ref = "citySearch"
          placeholder="Get a ten-day forecast"
          className="form-control"
          value={this.state.city}
          onChange={this.onInputChange}
          />
          <div className="input-dropdown">                         
         <ul className="list-group">{showCitiesList()}</ul>
                                   </div>              
        </div>
    );
  }
}

function mapStateToProps(state){
    return {
    cities: state.cities,
        weather: state.weather
  }
    
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getCity,fetchWeather, addCity}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
