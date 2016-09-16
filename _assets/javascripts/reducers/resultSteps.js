import { RESULT_CHECK } from '../actions'
import {
  getResultSteps
} from '../helpers'

export default function resultSteps (state = [], action) {
  const { type, step } = action
  switch (type) {
    case RESULT_CHECK:
      return getResultSteps(step, state)
    case '@@reduxReactRouter/routerDidChange':
      window.scrollTo(0, 0)
      return state
    default:
      return state
  }
}
