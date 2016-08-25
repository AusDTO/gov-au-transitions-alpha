import { connect } from 'react-redux'
import { QuestionFlow } from '../questions'
import AsideNav from '../components/AsideNav'
import { getQuestionTitle } from '../helpers'

const mapPrevAnswersToLabels = (prevAnswers, questions, type) => {
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

const getAnsweredQuestions = (answers = [], language) => {
  return answers.map((value, index) => {
    return {
      question: getQuestionTitle(QuestionFlow.questions[index].question, language),
      answers: mapPrevAnswersToLabels(value, QuestionFlow.questions[index].values, QuestionFlow.questions[index].type),
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
  }
}

const ResultsCalculator = connect(
  mapStateToProps,
  mapDispatchToProps
)(AsideNav)

export default ResultsCalculator
