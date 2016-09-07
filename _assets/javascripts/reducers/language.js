import { ON_SELECT, ROUTER_CHANGE } from '../actions'
import { QuestionFlow } from '../questions'

const lang = localStorage.getItem('language') || ''

export default function language (state = lang, action) {
  const { type, currentQuestion, value, payload } = action
  switch (type) {
    case ON_SELECT:
      let question = QuestionFlow.questions[currentQuestion]
      if (question.setLanguage) {
        return value
      }
      return state
    case ROUTER_CHANGE:
      // TODO move localStorage work into middleware
      if (payload.location.pathname === '/') {
        window.localStorage.removeItem('language')
      }
      return state
    default:
      return state
  }
}
