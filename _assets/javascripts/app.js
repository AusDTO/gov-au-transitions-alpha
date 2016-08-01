import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import transitionApp from './reducers'
import QuestionLinker from './containers/QuestionLinker'
import { QuestionFlow } from './questions'

let store = createStore(transitionApp)

render(
  <Provider store={store}>
    <QuestionLinker />
  </Provider>,
  document.getElementById('questions')
)

store.subscribe(() => {
  var currState = store.getState();

  if (currState.currentQuestion >= QuestionFlow.questions.length) {
    document.getElementById('js-results-holder').style.display = "block"
  }
})
