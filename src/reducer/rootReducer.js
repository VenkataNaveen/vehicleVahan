
import { combineReducers } from 'redux';
import AuthReducer from './authentication/reducers';


const rootReducers = combineReducers({
   auth:AuthReducer
});

export default rootReducers;
