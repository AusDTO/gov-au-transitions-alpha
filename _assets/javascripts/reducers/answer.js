const initialState = {
  currentQuestion: 0,
  currentAnswers: [],
  previousAnswers: [],
  resultSteps: [] // TODO this doesnt belong here
}
import { MOVE_NEXT, MOVE_BACK, ON_SELECT } from '../actions'
import { QuestionFlow } from '../questions'
import {
  removeAtIndex,
  replaceAtIndex,
  determineNextQuestion,
  determinePrevQuestion
} from '../helpers'

export default function stepping (state = initialState, action) {
  switch (action.type) {
    case MOVE_NEXT:
      let answers = replaceAtIndex(state.previousAnswers, state.currentQuestion, state.currentAnswers)
      let next = determineNextQuestion(state.currentQuestion, answers)
      return Object.assign({}, state, {
        currentQuestion: next,
        currentAnswers: state.previousAnswers[next] ? state.previousAnswers[next] : [],
        previousAnswers: answers
      })
    case MOVE_BACK:
      let prev = determinePrevQuestion(state.currentQuestion, state.previousAnswers)
      return Object.assign({}, state, {
        currentQuestion: prev,
        currentAnswers: state.previousAnswers[prev] ? state.previousAnswers[prev] : [],
        previousAnswers: state.previousAnswers
      })
    case ON_SELECT:
      let currentQuestion = QuestionFlow.questions[state.currentQuestion]
      let type = currentQuestion.type
      let result

      if (type === 'radio' || type === 'location') {
        result = [action.value]
      } else if (type === 'checkbox') {
        let index = state.currentAnswers.indexOf(action.value)
        if (index > -1) {
          result = removeAtIndex(state.currentAnswers, index)
        } else {
          result = state.currentAnswers.concat(action.value)
        }
      } else if (['locationaddmore', 'autocomplete', 'autocompleteaddmore'].indexOf(type) !== -1) {
        result = action.value
      } else {
        result = [action.value]
      }

      // If current question doesnt have the `setLanguage` flag,
      // concat an empty object, otherwise set the language to current value.
      var languageObject = {}
      if (currentQuestion.setLanguage) {
        languageObject = {
          language: action.value
        }
      }

      return Object.assign({}, state, {
        currentAnswers: result,
        previousAnswers: state.previousAnswers.slice(0, state.currentQuestion)
      }, languageObject)
    default:
      return state
  }
}
