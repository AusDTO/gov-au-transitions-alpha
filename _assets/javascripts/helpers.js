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

  menu: {
    border: 'solid 1px #ccc'
  }
}
