import { MOVE_NEXT, MOVE_BACK, ON_SELECT, MOVE_TO, ROUTER_CHANGE } from '../actions'
import { QuestionFlow } from '../questions'
import {
  replaceAtIndex,
  removeAtIndex,
  determineNextQuestion,
  determinePrevQuestion
} from '../helpers'

export default function currentAnswers (state = [], action) {
  const { type, currentQuestion, currentAnswers, previousAnswers, value, index, payload } = action
  switch (type) {
    case MOVE_NEXT:
      let answers = replaceAtIndex(previousAnswers, currentQuestion, currentAnswers)
      let next = determineNextQuestion(currentQuestion, answers)
      return previousAnswers[next] ? previousAnswers[next] : []
    case MOVE_BACK:
      let prev = determinePrevQuestion(currentQuestion, previousAnswers)
      return previousAnswers[prev] ? previousAnswers[prev] : []
    case ON_SELECT:
      let question = QuestionFlow.questions[currentQuestion]
      let questionType = question.type
      let result

      if (questionType === 'checkbox') {
        let index = currentAnswers.indexOf(value)
        if (index > -1) {
          result = removeAtIndex(currentAnswers, index)
        } else {
          result = currentAnswers.concat(value)
        }
      } else if (['locationaddmore', 'autocomplete', 'autocompleteaddmore'].indexOf(questionType) !== -1) {
        result = value
      } else {
        result = [value]
      }

      return result
    case MOVE_TO:
      return previousAnswers[index] ? previousAnswers[index] : []
    case ROUTER_CHANGE:
      // TODO move localStorage work into middleware
      if (payload.location.pathname === '/') {
        window.localStorage.removeItem('currentAnswers')
      }
      return state
    default:
      return state
  }
}
