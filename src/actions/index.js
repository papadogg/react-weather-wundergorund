import axios from 'axios';


const API_KEY = '067dab9e5ee2f07b';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const GET_CITY = "GET_CITY";
export const ADD_CITY = "ADD_CITY";

export function fetchWeather(zmw){
// const url = `http://localhost:8080/api/${API_KEY}/forecast10day/q/zmw:${zmw}.json`;
    const url = `https://api.wunderground.com/api/${API_KEY}/forecast10day/q/zmw:${zmw}.json`;
    const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
export function addCity(city){
    return {
    type: ADD_CITY,
    payload: city
  };
}

export function getCity(searchStr){    

   // const url = 'http://localhost:8080/search/aq?query='+searchStr;
    const url = 'https://autocomplete.wunderground.com/search/aq?query='+searchStr;
    const request = axios.get(url);
    
   
    
    return {
        type: GET_CITY,
        payload: request
    };    

  
}
