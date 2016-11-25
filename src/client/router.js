import React from 'react'
import { Route } from 'react-router'
import App from '../views/App'
import Login from '../views/User/Login'
import Content from '../views/Content/Content'

export default function routes(store) {
  const validate = function (nextState, replaceState, callback) {
    // 需要做权限控制的时候开启
    // const isLoggedIn = !!store.getState().auth.authenticated
    // if (!isLoggedIn) {
    //   replaceState(null, '/login')
    // }
    callback()
  }

  return (
    <Route>
      <Route component={App} onEnter={validate}>
        <Route path='/' component={Login} />
         <Route path='/aa' component={Content} />
      </Route>
    </Route>
  );
}
