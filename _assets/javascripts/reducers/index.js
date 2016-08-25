import { combineReducers } from 'redux'
import currentQuestion from './currentQuestion'
import currentAnswers from './currentAnswers'
import previousAnswers from './previousAnswers'
import language from './language'

export default combineReducers({
  currentQuestion,
  currentAnswers,
  previousAnswers,
  language
})
