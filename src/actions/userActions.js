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
var newPromise1 =function(time){
  let mmm="a"+time.toString()
  console.log(mmm)
  return new Promise(function(resolve, reject){
    //做一些异步操作
   
    setTimeout(function(){
        console.log('执行完成1111');
        resolve({
          code:0,
          data:{
            a:mmm
          }
          });
    }, time);
});
}


export function A_getAllNew(time){
  return {
    type: types.GET_ALL_NEW,
    payload: {
      promise: newPromise1(time)
    },
    // callback:A_userInfo
  }
}
// p.then(function(res){
//     console.log(res)
// })


