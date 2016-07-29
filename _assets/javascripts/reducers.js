import { combineReducers } from 'redux'
import { MOVE_NEXT, MOVE_BACK, ON_SELECT } from './actions'

// The initial state that the questions are in.
const initialState = {
  currentQuestion: 0,
  currentAnswers: [],
  previousAnswers: []
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
      return Object.assign({}, state, {
        currentAnswers: action.values
      })
    default:
      return state
  }
}

export default transitionApp
