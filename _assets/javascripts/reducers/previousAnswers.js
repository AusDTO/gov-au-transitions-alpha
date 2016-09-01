import { MOVE_NEXT, ON_SELECT } from '../actions'
import { replaceAtIndex, removeAtIndex } from '../helpers'

const answers = localStorage.getItem('currentAnswers') ?
                  JSON.parse(localStorage.getItem('currentAnswers')) : []

let answersMinusNull = answers.map(v => {
  if (!v) {
    return
  }

  return v
})

export default function previousAnswers (state = answersMinusNull, action) {
  const { type, currentQuestion, currentAnswers, previousAnswers } = action
  switch (type) {
    case MOVE_NEXT:
      return replaceAtIndex(previousAnswers, currentQuestion, currentAnswers)
    case ON_SELECT:
      return state.slice(0, currentQuestion)
    default:
      return state
  }
}
