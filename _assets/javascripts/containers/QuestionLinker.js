import { connect } from 'react-redux'
import { QuestionFlow } from '../questions'
import Question from '../components/Question'
// import { moveNext, onSelect } from '../actions'

const mapStateToProps = (state) => {
  return {
    current: state.currentQuestion,
    total: QuestionFlow.questions.length
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const QuestionLinker = connect(
  mapStateToProps,
  mapDispatchToProps
)(Question)

export default QuestionLinker
