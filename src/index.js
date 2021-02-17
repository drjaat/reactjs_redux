import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore } from 'redux'
import combineReducer from './redux/reducers/index'
import { Provider } from 'react-redux'
const myStore = createStore(combineReducer)

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)
