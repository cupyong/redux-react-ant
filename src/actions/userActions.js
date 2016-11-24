import * as types from '../constants/userAction';
import api from '../util/api'

export function A_userLogin() {
  return {
    type: types.USER_LOGIN,
     data:"asas"
  };
}

export function A_userInfo(){
 return {
    type: types.USER_INFO,
     payload: {
      promise: api.get('/menu')
    },
  };
}

export function A_getAllMenu() {
  return {
    type: types.GET_ALL_MENU,
    payload: {
      promise: api.get('/menu')
    },
    // callback:A_userInfo
  }
}

