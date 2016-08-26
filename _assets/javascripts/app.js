import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import QuestionLinker from './containers/QuestionLinker'
import ResultsCalculator from './containers/ResultsCalculator'
// import { QuestionFlow } from './questions'
// import { moveBack } from './actions'
let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    // TODO condition this to NODE_ENV as well?
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

render(
  <Provider store={store}>
    <QuestionLinker />
  </Provider>,
  document.getElementById('questions')
)

render(
  <Provider store={store}>
    <ResultsCalculator />
  </Provider>,
  document.getElementById('results-holder')
)
