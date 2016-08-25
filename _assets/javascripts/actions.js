export const MOVE_NEXT = 'MOVE_NEXT'
export const MOVE_BACK = 'MOVE_BACK'
export const ON_SELECT = 'ON_SELECT'
export const RESULT_CHECK = 'RESULT_CHECK'
export const MOVE_TO = 'MOVE_TO'

/**
 * action when moving to the next quesiton
 */
export function moveNext (currentQuestion, currentAnswers, previousAnswers) {
  return {
    type: MOVE_NEXT,
    currentQuestion,
    currentAnswers,
    previousAnswers
  }
}

/**
 * action when moving to the previous question
 */
export function moveBack (currentQuestion, currentAnswers, previousAnswers) {
  return {
    type: MOVE_BACK,
    currentQuestion,
    currentAnswers,
    previousAnswers
  }
}

/**
 * Action when jumping to a specific question. note that is should be less than
 * the current question.
 */
export function moveTo(index) {
  return {
    type: MOVE_TO,
    index
  }
}

/**
 * action when selecting a value of a question.
 */
export function onSelect(value, currentQuestion, currentAnswers, previousAnswers) {
  return {
    type: ON_SELECT,
    value,
    currentQuestion,
    currentAnswers,
    previousAnswers
  }
}

/**
 * Action when selecting (checking off) a step in the results screen
 */
export function resultCheck(step) {
  return {
    type: RESULT_CHECK,
    step
  }
}
