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

function transitionApp(state = initialState, action) {
  //@TODO here need to check that the current question has been andswered and
  // validated and that the current set of answered questions get moved to the
  // set of previously answered questions.
  switch (action.type) {
    case MOVE_NEXT:
      return Object.assign({}, state, {
        currentQuestion: state.currentQuestion + 1,
        currentAnswers: []
      })
    case MOVE_BACK:
      return Object.assign({}, state, {
        currentQuestion: state.currentQuestion - 1,
        currentAnswers: []
      })
    case ON_SELECT:
      let type = QuestionFlow.questions[state.currentQuestion].type
      let result

      if (type === 'radio') {
        result = [action.value]
      } else if (type === 'checkbox') {
        let index = state.currentAnswers.indexOf(action.value)
        if (index > -1) {
          result = removeAtIndex(state.currentAnswers, index)
        } else {
          result = state.currentAnswers.concat(action.value)
        }
      } else {
        alert("changed")
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
