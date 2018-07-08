import { combineReducers } from 'redux';
import { cityDetail } from '../reducers/fetch_reducer'

const rootReducer = combineReducers({
  cityDetails: cityDetail
});

export default rootReducer;
