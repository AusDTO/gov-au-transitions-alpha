import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import transitionApp from './reducers'
import Question from './components/Question'

let store = createStore(transitionApp)

render(
  <Provider store={store}>
    <Question />
  </Provider>,
  document.getElementById('questions')
)
