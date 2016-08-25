import { MOVE_NEXT, ON_SELECT } from '../actions'
import { replaceAtIndex } from '../helpers'

export default function previousAnswers (state = [], action) {
  const { type, currentQuestion, currentAnswers, previousAnswers } = action
  switch (type) {
    case MOVE_NEXT:
      return replaceAtIndex(previousAnswers, currentQuestion, currentAnswers)
    case ON_SELECT:
      return previousAnswers.slice(0, currentQuestion)
    default:
      return state
  }
}
