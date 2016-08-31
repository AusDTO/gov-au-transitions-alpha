import  { push } from 'redux-router';
import { getPath } from './helpers'

export const MOVE_NEXT = 'MOVE_NEXT'
export const MOVE_BACK = 'MOVE_BACK'
export const ON_SELECT = 'ON_SELECT'
export const RESULT_CHECK = 'RESULT_CHECK'
export const MOVE_TO = 'MOVE_TO'

/**
 * action when moving to the next question
 */
export const moveNext = () => {
  return (dispatch, getState) => {
    const { currentQuestion, currentAnswers, previousAnswers } = getState()
    dispatch(next(currentQuestion, currentAnswers, previousAnswers))
    return dispatch(push({
        pathname: getPath(getState().currentQuestion)
      }))
  }
}

/**
 * action when moving to the previous question
 */
export const moveBack = () => {
  return (dispatch, getState) => {
    const { currentQuestion, currentAnswers, previousAnswers } = getState()
    dispatch(back(currentQuestion, currentAnswers, previousAnswers))
    return dispatch(push({pathname: getPath(getState().currentQuestion)}))
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
export const moveTo = (index) => {
  return (dispatch, getState) => {
    const { previousAnswers } = getState()
    dispatch(to(index, previousAnswers))
    return dispatch(push({pathname: getPath(getState().currentQuestion)}))
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
 * Simple action handler for moveTo
 * @param  {integer} index           The index of the question to move to.
 * @param  {array} previousAnswers Committed answers to date
 * @return {object}                 Action object
 */
const to = (index, previousAnswers) => {
  return {
    type: MOVE_TO,
    index,
    previousAnswers
  }
}

/**
 * Simple action handler for onSelect
 * @param  {mixed} value           Result from control
 * @param  {integer} currentQuestion Index of active question
 * @param  {array} currentAnswers  Current questions answers
 * @param  {array} previousAnswers Committed answers
 * @return {object}                 Action object
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

/**
 * Simple action handler for moveNext
 * @param  {integer} currentQuestion Index of active question
 * @param  {array} currentAnswers  Current questions answers
 * @param  {array} previousAnswers Committed answers
 * @return {object}                 Action object
 */
const next = (currentQuestion, currentAnswers, previousAnswers) => {
  return {
    type: MOVE_NEXT,
    currentQuestion,
    currentAnswers,
    previousAnswers
  }
}

/**
 * Simple action handler for moveBack
 * @param  {integer} currentQuestion Index of active question
 * @param  {array} currentAnswers  Current questions answers
 * @param  {array} previousAnswers Committed answers
 * @return {object}                 Action object
 */
const back = (currentQuestion, currentAnswers, previousAnswers) => {
  return {
    type: MOVE_BACK,
    currentQuestion,
    currentAnswers,
    previousAnswers
  }
}
