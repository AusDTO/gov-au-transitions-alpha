import { connect } from 'react-redux'
import { QuestionFlow } from '../questions'
import AsideNav from '../components/AsideNav'
import { getQuestionTitle } from '../helpers'
import { moveTo } from '../actions'

/**
 * When a list of answers is passed the actual label values is return rather
 * than the form value
 * @param  {Array(string)} prevAnswers List of previous answers
 * @param  {Array{Object}} questions   value, label pairs of all possible answers
 * @param  {string} type        They type of form quesiton
 * @return {Array(string)}             a list of answers labels
 */
const mapActualAnswersToLabels = (prevAnswers, questions, type) => {
  if (type !== "radio" && type !== "checkbox" && type !== "autocompleteaddmore"
        && type !== "autocomplete") {
    return prevAnswers
  }
  return prevAnswers.map((answer) => {
    for (let i = 0; i < questions.length; i += 1) {
      if (questions[i].value === answer) {
        return questions[i].label
      }
    }
  })
}

/**
 * Links the answered question list to the corresponding answers in the question flow
 * @param  {Array}  [answers=[]] A list of answered questions.
 * @param  {string} language     contains the current languate selected.
 * @return {Array(Object)}              List of answers containing question name and
 */
const getAnsweredQuestions = (answers = [], language) => {
  return answers.map((value, index) => {
    return {
      question: getQuestionTitle(QuestionFlow.questions[index].question, language),
      answers: mapActualAnswersToLabels(value, QuestionFlow.questions[index].values, QuestionFlow.questions[index].type),
      index: index
    }
  })
}

const mapStateToProps = (state) => {
  const { language } = state
  return {
    showResults: state.currentQuestion >= QuestionFlow.questions.length,
    questions: getAnsweredQuestions(state.previousAnswers, language)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEdit: (index) => {
      dispatch(moveTo(index))
    }
  }
}

const ResultsCalculator = connect(
  mapStateToProps,
  mapDispatchToProps
)(AsideNav)

export default ResultsCalculator
