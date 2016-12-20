import { GET_CITY } from '../actions/index';

export default function(state = [], action){
  switch(action.type){
      case GET_CITY:
          
          return action.payload.data.RESULTS;
  }
  return state;
}
