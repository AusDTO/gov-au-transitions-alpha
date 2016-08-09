import { combineReducers } from 'redux'
import { MOVE_NEXT, MOVE_BACK, ON_SELECT } from './actions'
import { QuestionFlow } from './questions'
import { removeAtIndex, replaceAtIndex } from './helpers'

// The initial state that the questions are in.
const initialState = {
  currentQuestion: 0,
  currentAnswers: [],
  previousAnswers: []
}

const flattenAnswers = (previousAnswers) => {
  let result = [];
  for (let i = 0; i < previousAnswers.length; i += 1) {
    result = result.concat(previousAnswers[i])
  }
  return result
}

function determineQuestionCanShow(index, answers) {
  let rules = QuestionFlow.questions[index].condition ?
              QuestionFlow.questions[index].condition.split(',') : []

  if (!rules.length) {
    return true
  }

  for (let i = 0; i < rules.length; i += 1) {
    if (rules[i].indexOf('+') > -1) {
      let andRules = rules[i].split('+')
      let result = true
      for (let j = 0; j < andRules.length; j += 1) {
        if (answers.indexOf(andRules[i]) === -1) {
          result = false
        }
      }
      if (result) {
        return true
      }
    } else {
      if (answers.indexOf(rules[i]) !== -1) {
        return true
      }
    }
  }
  return false
}

const determineNextQuestion = (current, answers) => {
  let next = current + 1
  let flatAnswers = flattenAnswers(answers)

  while (next < QuestionFlow.questions.length &&
          !determineQuestionCanShow(next, flatAnswers)) {
    next += 1
  }
  return next
}

const determinePrevQuestion = (current, answers) => {
  let prev = current - 1
  let flatAnswers = flattenAnswers(answers)

  while (prev > 0 && !determineQuestionCanShow(prev, flatAnswers)) {
    prev -= 1
  }
  return prev
}

function transitionApp(state = initialState, action) {
  //@TODO here need to check that the current question has been andswered and
  // validated and that the current set of answered questions get moved to the
  // set of previously answered questions.
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
      let type = QuestionFlow.questions[state.currentQuestion].type
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
      } else if (type === 'locationaddmore' || type === 'autocomplete') {
        result = action.value
      } else  {
        result = [action.value]
      }
      return Object.assign({}, state, {
        currentAnswers: result,
        previousAnswers: state.previousAnswers.slice(0, state.currentQuestion)
      })
    default:
      return state
  }
}

export default transitionApp
