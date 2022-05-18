import { combineReducers } from 'redux';
import initReducer from './reducers/init'

export default combineReducers({
   init: initReducer
})