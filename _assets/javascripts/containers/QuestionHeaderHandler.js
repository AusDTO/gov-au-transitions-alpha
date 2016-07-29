import { connect } from 'react-redux'
import { QuestionFlow } from '../questions'
import QuestionHeader from '../components/QuestionHeader'
import { moveBack } from '../actions'

const getQuestion = (index, questions) => {
  return {
    title: QuestionFlow.questions[index].question,
    index: index + 1,
    total: QuestionFlow.questions.length
  }
}

const mapStateToProps = (state) => {
  return getQuestion(state.currentQuestion, QuestionFlow)
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
