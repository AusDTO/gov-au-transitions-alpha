import { MOVE_NEXT, ON_SELECT } from '../actions'
import { replaceAtIndex, removeAtIndex } from '../helpers'

const answers = localStorage.getItem('currentAnswers') ?
                  JSON.parse(localStorage.getItem('currentAnswers')) : []
let answersMinusNull = answers
answers.forEach((val, index) => {
  if (val === null) {
    answersMinusNull = removeAtIndex(answersMinusNull, index)
  }
})

export default function previousAnswers (state = answersMinusNull, action) {  
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
