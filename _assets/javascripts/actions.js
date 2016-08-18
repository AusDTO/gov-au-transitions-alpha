export const MOVE_NEXT = 'MOVE_NEXT'
export const MOVE_BACK = 'MOVE_BACK'
export const ON_SELECT = 'ON_SELECT'
export const RESULT_CHECK = 'RESULT_CHECK'


export function moveNext() {
  return { type: MOVE_NEXT }
}

export function moveBack() {
  return { type: MOVE_BACK }
}

export function onSelect(value) {
  return {
    type: ON_SELECT,
    value
  }
}

export function resultCheck(step) {
  return {
    type: RESULT_CHECK,
    step
  }
}
