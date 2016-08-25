export const MOVE_NEXT = 'MOVE_NEXT'
export const MOVE_BACK = 'MOVE_BACK'
export const ON_SELECT = 'ON_SELECT'
export const RESULT_CHECK = 'RESULT_CHECK'

export function moveNext (currentQuestion, currentAnswers, previousAnswers) {
  return {
    type: MOVE_NEXT,
    currentQuestion,
    currentAnswers,
    previousAnswers
  }
}

export function moveBack (currentQuestion, currentAnswers, previousAnswers) {
  return {
    type: MOVE_BACK,
    currentQuestion,
    currentAnswers,
    previousAnswers
  }
}

export function onSelect (value, currentQuestion, currentAnswers, previousAnswers) {
  return {
    type: ON_SELECT,
    value,
    currentQuestion,
    currentAnswers,
    previousAnswers
  }
}

export function resultCheck(step) {
  return {
    type: RESULT_CHECK,
    step
  }
}
