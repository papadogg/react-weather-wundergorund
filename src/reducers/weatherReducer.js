import { FETCH_WEATHER } from '../actions/index';
import { ADD_CITY } from '../actions/index';

let initialState = {
    cityList:[],
    weatherList:[]
}

export default function(state = initialState, action){
  switch(action.type){
      case FETCH_WEATHER:
          
          
          
          
          return {
              ...state,
              weatherList: [action.payload.data,...state.weatherList]
          }
      
    case ADD_CITY:
           
    return {
              ...state,
              cityList: [action.payload,...state.cityList]
          }
     }   
  return state;
}


