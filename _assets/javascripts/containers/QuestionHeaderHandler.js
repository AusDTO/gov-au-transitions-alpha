import { connect } from 'react-redux'
import { QuestionFlow } from '../questions'
import QuestionHeader from '../components/QuestionHeader'
import { moveBack } from '../actions'
import { getQuestionTitle } from '../helpers'

const getQuestion = (state, questions) => {
  const { currentQuestion: index, language, currentAnswers, previousAnswers } = state
  return {
    title: index >= questions.length ? '' : getQuestionTitle(questions[index].question, language),
    index: index + 1,
    total: questions.length,
    currentAnswers,
    previousAnswers,
    currentQuestion: index
  }
}

const mapStateToProps = (state) => {
  return getQuestion(state, QuestionFlow.questions)
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (currentQuestion, currentAnswers, previousAnswers) => {
      dispatch(moveBack(currentQuestion, currentAnswers, previousAnswers))
    }
  }
}

const QuestionHeaderHandler = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionHeader)

export default QuestionHeaderHandler
