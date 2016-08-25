import { combineReducers } from 'redux'
import currentQuestion from './currentQuestion'
import currentAnswers from './currentAnswers'
import previousAnswers from './previousAnswers'
import language from './language'
import resultSteps from './resultSteps'

export default combineReducers({
  currentQuestion,
  currentAnswers,
  previousAnswers,
  language,
  resultSteps
})
