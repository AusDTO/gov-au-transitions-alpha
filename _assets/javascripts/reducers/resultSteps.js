import { RESULT_CHECK } from '../actions'
import {
  getResultSteps
} from '../helpers'

export default function resultSteps (state = [], action) {
  const { type, step } = action
  switch (type) {
    case RESULT_CHECK:
      return getResultSteps(step, state)
    default:
      return state
  }
}
