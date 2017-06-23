import { createStore, applyMiddleware} from 'redux'
import React from 'react'
import { Provider } from 'react-redux'
import {Router,browserHistory,IndexRoute,Route} from 'react-router'
import logger from 'redux-logger'
import reducers from '../../Reducers/index'
import './index.css'
import {notification} from 'antd'
import routers from '../../Routes/route'

const store = createStore(reducers,applyMiddleware(logger));
notification.config({top:45});

export default class Root extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <Router history={browserHistory}>
          {routers}
        </Router>
      </Provider>
    )
  }
}
