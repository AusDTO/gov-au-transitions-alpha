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

const getPreviousAnswersAsArray = (previousAnswers) => {
  let result = [];
  for (let i = 0; i < previousAnswers.length; i += 1) {
    result = result.concat(previousAnswers[i])
  }
  return result
}

const checkAnswersBasedOnRules = (results, rules) => {
  let orRules = rules.split(',')

  for (let i = 0; i < orRules.length; i += 1) {
    if (orRules[i].indexOf('+') !== -1) {
      let andRules = orRules[i].split("+")
      let outcome = true
      for (let j = 0; j < andRules.length; j += 1) {
        if (results.indexOf(andRules[j]) === -1) {
          outcome = false
        }
      }
      if (outcome) {
        return true
      }
    } else {
      if (results.indexOf(orRules[i]) !== -1) {
        return true
      }
    }
  }

  return false
}

const getResultsPanels = (state) => {
  let answers = getPreviousAnswersAsArray(state.previousAnswers)
  for (let i = 0; i < QuestionFlow.results.length; i += 1) {
    if (!checkAnswersBasedOnRules(answers, QuestionFlow.results[i].rules)) {
      console.log("Result " + QuestionFlow.results[i].id + " is: display:none");
      document.querySelector(QuestionFlow.results[i].id).style.display = "none"
    }
  }
}

store.subscribe(() => {
  var currState = store.getState();

  if (currState.currentQuestion >= QuestionFlow.questions.length) {
    getResultsPanels(currState)
    document.getElementById('js-results-holder').style.display = "block"
  }
})
