import { QuestionFlow } from './questions'

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

const getPreviousAnswersAsArray = (previousAnswers) => {
  let result = [];
  for (let i = 0; i < previousAnswers.length; i += 1) {
    result = result.concat(previousAnswers[i])
  }
  return result
}

const checkAnswersBasedOnRule = (results, rule) => {
  let orRules = rule.split(',')

  for (let i = 0; i < orRules.length; i += 1) {
    if (orRules[i].indexOf('+') !== -1) {
      let andRules = orRules[i].split("+")
      let outcome = true
      for (let j = 0; j < andRules.length; j += 1) {
        if (results.indexOf(andRules[j]) === -1) {
          outcome = false
        }
      }
      if (outcome) {
        return true
      }
    } else {
      if (results.indexOf(orRules[i]) !== -1) {
        return true
      }
    }
  }

  return false
}

const getListModules = (list, answers) => {

}

export function getResultsList(state) {
  let answers = getPreviousAnswersAsArray(state.previousAnswers)
  let results = [];
  for (let i = 0; i < QuestionFlow.results.length; i += 1) {
    if (!QuestionFlow.results[i].condition || checkAnswersBasedOnRule(answers, QuestionFlow.results[i].condition)) {
      results = results.concat(QuestionFlow.results[i])
    }
  }
  return results
}
