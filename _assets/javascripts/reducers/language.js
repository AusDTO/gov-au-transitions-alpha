import { ON_SELECT } from '../actions'
import { QuestionFlow } from '../questions'

const lang = localStorage.getItem('language') || ''

export default function language (state = lang, action) {
  const { type, currentQuestion, value } = action
  switch (type) {
    case ON_SELECT:
      let question = QuestionFlow.questions[currentQuestion]
      if (question.setLanguage) {
        return value
      }
      return state
    default:
      return state
  }
}
