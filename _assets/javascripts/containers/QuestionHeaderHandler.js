import { connect } from 'react-redux'
import { QuestionFlow } from '../questions'
import QuestionHeader from '../components/QuestionHeader'
import { moveBack } from '../actions'

const getQuestion = (index, questions) => {
  return {
    title: index >= questions.length ? "" : questions[index].question,
    index: index + 1,
    total: questions.length
  }
}

const mapStateToProps = (state) => {
  return getQuestion(state.currentQuestion, QuestionFlow.questions)
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(moveBack())
    }
  }
}

const QuestionHeaderHandler = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionHeader)

export default QuestionHeaderHandler
