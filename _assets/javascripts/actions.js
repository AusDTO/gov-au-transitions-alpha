export const MOVE_NEXT = 'MOVE_NEXT'
export const MOVE_BACK = 'MOVE_BACK'
export const ON_SELECT = 'ON_SELECT'
export const RESULT_CHECK = 'RESULT_CHECK'
export const MOVE_TO = 'MOVE_TO'

/**
 * action when moving to the next quesiton
 */
export const moveNext = () => {
  return (dispatch, getState) => {
    const { currentQuestion, currentAnswers, previousAnswers } = getState()
    return dispatch(next(currentQuestion, currentAnswers, previousAnswers))
  }
}

export const moveBack = () => {
  return (dispatch, getState) => {
    const { currentQuestion, currentAnswers, previousAnswers } = getState()
    return dispatch(back(currentQuestion, currentAnswers, previousAnswers))
  }
}

/**
 * Action creator for selecting an answer
 */
export const onSelect = (value) => {
  return (dispatch, getState) => {
    const { currentQuestion, currentAnswers, previousAnswers } = getState()
    return dispatch(select(value, currentQuestion, currentAnswers, previousAnswers))
  }
}

/**
 * Action when jumping to a specific question. note that is should be less than
 * the current question.
 */
export const moveTo = (index, previousAnswers) => {
  return {
    type: MOVE_TO,
    index,
    previousAnswers
  }
}

/**
 * Action when selecting (checking off) a step in the results screen
 */
export const resultCheck = (step) => {
  return {
    type: RESULT_CHECK,
    step
  }
}

/**
 * action when selecting a value of a question.
 */
const select = (value, currentQuestion, currentAnswers, previousAnswers) => {
  return {
    type: ON_SELECT,
    value,
    currentQuestion,
    currentAnswers,
    previousAnswers
  }
}

const next = (currentQuestion, currentAnswers, previousAnswers) => {
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
const back = (currentQuestion, currentAnswers, previousAnswers) => {
  return {
    type: MOVE_BACK,
    currentQuestion,
    currentAnswers,
    previousAnswers
  }
}
