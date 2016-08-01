import { combineReducers } from 'redux'
import { MOVE_NEXT, MOVE_BACK, ON_SELECT } from './actions'
import { QuestionFlow } from './questions'

// The initial state that the questions are in.
const initialState = {
  currentQuestion: 0,
  currentAnswers: [],
  previousAnswers: []
}

function removeAtIndex(list, index) {
  return list.slice(0, index).concat(list.slice(index + 1))
}

function replaceAtIndex(list, index, value) {
  return list.slice(0, index).concat(value).concat(list.slice(index + 1))
}

function transitionApp(state = initialState, action) {
  //@TODO here need to check that the current question has been andswered and
  // validated and that the current set of answered questions get moved to the
  // set of previously answered questions.
  switch (action.type) {
    case MOVE_NEXT:
      return Object.assign({}, state, {
        currentQuestion: state.currentQuestion + 1,
        currentAnswers: state.previousAnswers[state.currentQuestion + 1] ? state.previousAnswers[state.currentQuestion + 1] : [],
        previousAnswers: replaceAtIndex(state.previousAnswers, state.currentQuestion, [state.currentAnswers])
      })
    case MOVE_BACK:
      return Object.assign({}, state, {
        currentQuestion: state.currentQuestion - 1,
        currentAnswers: state.previousAnswers[state.currentQuestion - 1],
        previousAnswers: state.previousAnswers
      })
    case ON_SELECT:
      let type = QuestionFlow.questions[state.currentQuestion].type
      let result

      if (type === 'radio' || type === 'location') {
        result = [action.value]
      } else if (type === 'checkbox') {
        let index = state.currentAnswers.indexOf(action.value)
        if (index > -1) {
          result = removeAtIndex(state.currentAnswers, index)
        } else {
          result = state.currentAnswers.concat(action.value)
        }
      } else if (type === 'locationaddmore') {
        let index = state.currentAnswers.indexOf('addmore')
        if (index > -1) {
          result = removeAtIndex(state.currentAnswers, index).concat(action.value)
        } else {
          result = state.currentAnswers.concat(action.value)
        }
      } else  {
        result = [action.value]
      }
      return Object.assign({}, state, {
        currentAnswers: result
      })
    default:
      return state
  }
}

export default transitionApp
