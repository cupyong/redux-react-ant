import React    from 'react'
import ReactDOM from 'react-dom'
import store    from '../store'
import { Provider } from 'react-redux'
import { Router, useRouterHistory } from 'react-router'
import { createHistory } from 'history'
import router from './router'
import 'antd/style/index.less'

const history = useRouterHistory(createHistory)({ basename: '' })
const target = document.getElementById('root')

class Root extends React.Component {
  render () {
    return (
      <div>
        <Provider store={store}>
          <div>
            <Router history={history} routes={router(store)}/>
          </div>
        </Provider>
      </div>
    )
  }
}

ReactDOM.render(<Root/>, target)
