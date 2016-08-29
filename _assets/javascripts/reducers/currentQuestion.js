import { MOVE_NEXT, MOVE_BACK, MOVE_TO } from '../actions'
import {
  replaceAtIndex,
  determineNextQuestion,
  determinePrevQuestion
} from '../helpers'

export default function currentQuestion (state = 0, action) {
  const { type, currentQuestion, currentAnswers, previousAnswers, index } = action
  switch (type) {
    case MOVE_NEXT:
      let answers = replaceAtIndex(previousAnswers, currentQuestion, currentAnswers)
      return determineNextQuestion(currentQuestion, answers)
    case MOVE_BACK:
      return determinePrevQuestion(currentQuestion, previousAnswers)
    case MOVE_TO:
      return index
    default:
      return state
  }
}
