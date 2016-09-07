import { QuestionFlow } from './questions'

export function removeAtIndex (list, index) {
  return list.slice(0, index).concat(list.slice(index + 1))
}

export function replaceAtIndex (list, index, value) {
  let val = {}
  val[index] = value
  return Object.assign([], list, val)
}

/**
 * Question comes in either a string or object format.
 * Due to the possibility of 'language' being set.
 * Helper function to determine how to fetch the correct string.
 *
 * e.g.
 * question: {
 *  first: 'How old are you?',
 *  third: 'How old are they?'
 * }
 * or
 * question: 'How are you?
 * '
 * @param question {string|object} The object or string that represents the question.
 * @param language {string} Current set language
 */
export function getQuestionTitle (question, language) {
  if (typeof question === 'string') {
    return question
  }

  return question[language] || question
}

/**
 * Legend can be contextual, find appropriate string
 * @param  {mixed} legend The string or object for the legend
 * @param  {string} language Current selected language
 * @return {string}          string, contextual result
 */
export const getQuestionLegend = (legend, language) => {
  if (typeof legend === 'string') {
    return legend
  }

  return legend[language] || legend
}

/**
 * Flatten a shallow array (depth of 1 only).
 * TODO Make recursive, only when use case arises.
 * @param {array} Array to flatten
 * @return {array} Flattened array
 */
export const flattenArray = (array) => {
  let result = []
  for (let i = 0; i < array.length; i += 1) {
    result = result.concat(array[i])
  }
  return result
}

/**
 * Loops through the question set, trying to determine the next available question
 * based on 'conditions' - @see determineQuestionCanShow
 * @param {integer} current Index of current question
 * @param {array} answers Set of current answers
 * @returns {integer} Index of next question
 */
export const determineNextQuestion = (current, answers) => {
  let next = current + 1
  let flatAnswers = flattenArray(answers)

  while (next < QuestionFlow.questions.length &&
          !determineQuestionCanShow(next, flatAnswers)) {
    next += 1
  }
  return next
}

/**
* Loops through the question set, trying to determine the previous question
* based on 'conditions' - @see determineQuestionCanShow
* @param {integer} current Index of current question
* @param {array} answers Set of current answers
* @returns {integer} Index of previous question
 */
export const determinePrevQuestion = (current, answers) => {
  let prev = current - 1
  let flatAnswers = flattenArray(answers)

  while (prev > 0 && !determineQuestionCanShow(prev, flatAnswers)) {
    prev -= 1
  }
  return prev
}

/**
 * TODO Function too long, split into smaller functions.
 * Loop through the current answer set to see if the conditions of the
 * current question has been met.
 * @param {integer} index Index of the current question to query
 * @param {array} answers Set of previous answers
 * @return {boolean}  Whether to display question at index
 */
export const determineQuestionCanShow = (index, answers) => {
  let rules = QuestionFlow.questions[index].condition
    ? QuestionFlow.questions[index].condition.split(',') : []

  if (!rules.length) {
    return true
  }

  for (let i = 0; i < rules.length; i += 1) {
    if (rules[i].indexOf('+') > -1) {
      let andRules = rules[i].split('+')
      let result = true
      for (let j = 0; j < andRules.length; j += 1) {
        if (answers.indexOf(andRules[i]) === -1) {
          result = false
        }
      }
      if (result) {
        return true
      }
    } else if (rules[i].indexOf('!') !== -1) {
      const negateRules = rules[i].split('!').slice(1) || []
      const negateFound = negateRules.filter(negateRule => {
        return answers.indexOf(negateRule) !== -1
      })
      return !negateFound.length
    } else {
      if (answers.indexOf(rules[i]) !== -1) {
        return true
      }
    }
  }
  return false
}

// TODO This needs to be removed or find a better way to do this.
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
    display: 'block'
  },

  menu: {
    border: 'solid 1px #ccc'
  }
}

export const autocompleteMatchStateToTerm = (state, value) => {
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

export const getLabelFromValue = (values, value) => {
  for (let i = 0; i < values.length; i += 1) {
    if (values[i].value === value) {
      return values[i].label
    }
  }
  return value
}

const getBadgeContent = (items, checked) => {
  let len = items.length
  let minus = 0
  for (let i = 0; i < len; i += 1) {
    if (checked.indexOf(items[i].label.split(' ').join('_')) > -1) {
      minus += 1
    }
  }
  return len - minus
}

const getPreviousAnswersAsArray = (previousAnswers) => {
  let result = []
  for (let i = 0; i < previousAnswers.length; i += 1) {
    result = result.concat(previousAnswers[i])
  }
  return result
}

/**
 * returns the results that complete the conditions that the current answers
 * match.
**/
const checkAnswersBasedOnRule = (results, rule) => {
  let orRules = rule.split(',')

  for (let i = 0; i < orRules.length; i += 1) {
    if (orRules[i].indexOf('+') !== -1) {
      let andRules = orRules[i].split('+')
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

/**
 * Removes the results that contain no list items after they have been check by
 * the condtions.
**/
const removeEmptyResults = results => {
  let tempResults = results.filter(value => value.list.length > 0)
  let res = []

  for (let i = 0; i < tempResults.length; i += 1) {
    res = res.concat(Object.assign({}, tempResults[i], {
      list: tempResults[i].list.filter(item => item.items.length > 0)
    }))
  }
  return res
}

/**
 * Returns the list of results based on the condtion passed with respect to the
 * questions answered.
**/
const getListModules = (list, answers, checked) => {
  let results = []
  for (let i = 0; i < list.length; i += 1) {
    let items = []
    for (let j = 0; j < list[i].items.length; j += 1) {
      if (!list[i].items[j].condition || checkAnswersBasedOnRule(answers, list[i].items[j].condition)) {
        items = items.concat(list[i].items[j])
      }
    }
    results = results.concat(Object.assign({}, list[i], {
      items: items,
      badge: getBadgeContent(items, checked)
    }))
  }
  return results
}

export const getResultSteps = (step, currentSteps) => {
  let index = currentSteps.indexOf(step)
  if (index > -1) {
    return removeAtIndex(currentSteps, index)
  } else {
    return currentSteps.concat(step)
  }
}

export const getResultsList = (state) => {
  let answers = getPreviousAnswersAsArray(state.previousAnswers)
  let results = []
  for (let i = 0; i < QuestionFlow.results.length; i += 1) {
    if (!QuestionFlow.results[i].condition || checkAnswersBasedOnRule(answers, QuestionFlow.results[i].condition)) {
      results = results.concat(Object.assign({}, QuestionFlow.results[i], {
        list: getListModules(QuestionFlow.results[i].list, answers, state.resultSteps)
      }))
    }
  }
  return removeEmptyResults(results)
}

/**
 * When passed an id will return the index that the id exists in the questions
 * array
 * @param {string} id The id that we want the index for
 * @type {number}
 */
export const getIndexFromId = id => {
  let len = QuestionFlow.questions.length
  for (let i = 0; i < len; i += 1) {
    if (QuestionFlow.questions[i].name === id) {
      return i
    }
  }
  return 0
}

/**
 * Returns the id from an index passed in the questions array
 * @param  {number} index the index of the question in the questions array
 * @return {string}       the id that correspons to the index passed
 */
export const getIdFromIndex = index => {
  return QuestionFlow.questions[index].name
}

export const getPath = index => {
  if (index < 0) {
    return "/"
  } else if (index >= QuestionFlow.questions.length) {
    return "/results"
  } else {
    return '/question/' + getIdFromIndex(index)
  }
}
