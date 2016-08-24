import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers/index'
import QuestionLinker from './containers/QuestionLinker'
import ResultsCalculator from './containers/ResultsCalculator'
// import { QuestionFlow } from './questions'
// import { moveBack } from './actions'
let store = createStore(reducers)

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
