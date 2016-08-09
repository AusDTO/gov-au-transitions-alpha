export function removeAtIndex(list, index) {
  return list.slice(0, index).concat(list.slice(index + 1))
}

export function replaceAtIndex(list, index, value) {
  let val = {}
  val[index] = value
  return Object.assign([], list, val)
}

export let styles = {
  item: {
    padding: '2px 6px',
    cursor: 'default'
  },

  highlightedItem: {
    color: 'white',
    background: 'hsl(200, 50%, 50%)',
    padding: '2px 6px',
    cursor: 'default'
  },

  wrapperStyle: {
    display: "block"
  },

  menu: {
    border: 'solid 1px #ccc'
  }
}

export function autocompleteMatchStateToTerm(state, value) {
  return (
    state.value.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    state.label.toLowerCase().indexOf(value.toLowerCase()) !== -1
  )
}

// export function sortStates(a, b, value) {
//   return (
//     a.name.toLowerCase().indexOf(value.toLowerCase()) >
//     b.name.toLowerCase().indexOf(value.toLowerCase()) ? 1 : -1
//   )
// }

export function getLabelFromValue(values, value) {
  for (let i = 0; i < values.length; i += 1) {
    if (values[i].value === value) {
      return values[i].label
    }
  }
  return value
}
