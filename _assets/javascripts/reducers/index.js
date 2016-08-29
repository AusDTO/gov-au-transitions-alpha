import { combineReducers } from 'redux'
import currentQuestion from './currentQuestion'
import currentAnswers from './currentAnswers'
import previousAnswers from './previousAnswers'
import language from './language'
import resultSteps from './resultSteps'
import { routerStateReducer } from 'redux-router'

export default combineReducers({
  router: routerStateReducer,
  currentQuestion,
  currentAnswers,
  previousAnswers,
  language,
  resultSteps
})
