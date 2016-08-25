import { MOVE_NEXT, MOVE_BACK } from '../actions'
import {
  replaceAtIndex,
  determineNextQuestion,
  determinePrevQuestion
} from '../helpers'

export default function currentQuestion (state = 0, action) {
  const { type, currentQuestion, currentAnswers, previousAnswers } = action
  switch (type) {
    case MOVE_NEXT:
      let answers = replaceAtIndex(previousAnswers, currentQuestion, currentAnswers)
      return determineNextQuestion(currentQuestion, answers)
    case MOVE_BACK:
      return determinePrevQuestion(currentQuestion, previousAnswers)
    default:
      return state
  }
}
