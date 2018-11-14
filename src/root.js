import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import { store } from './helpers'
import { Provider } from 'react-redux'

export default () => 
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('root'))