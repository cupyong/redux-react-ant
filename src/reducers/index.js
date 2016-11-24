import { combineReducers } from 'redux'
import * as user from './userReduces'

export default combineReducers({
  ...user
});
