import * as types from '../constants/userAction';

export  function R_userLogin(state = {}, action) {
  switch (action.type) {
    case types.USER_LOGIN:
      return action.data;
    default:
      return state;
  }
}

export  function R_userInfo(state = {}, action) {
  switch (action.type) {
    case types.USER_INFO+"_SUCCESS":
        return action.payload.data
    default:
      return state;
  }
}

export  function R_getAllMenu(state ={}, action) {
  switch (action.type) {
    case types.GET_ALL_MENU+"_SUCCESS":
       return action.payload.data
    default:
      return state;
  }
}





