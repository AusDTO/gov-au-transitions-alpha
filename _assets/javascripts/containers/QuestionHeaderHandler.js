import { connect } from 'react-redux'
import { QuestionFlow } from '../questions'
import QuestionHeader from '../components/QuestionHeader'
import { moveBack } from '../actions'
import { getQuestionTitle } from '../helpers'

const getQuestion = (state, questions) => {
  const { currentQuestion: index, language } = state
  return {
    title: index >= questions.length ? '' : getQuestionTitle(questions[index].question, language),
    index: index + 1,
    total: questions.length
  }
}

const mapStateToProps = ({ answer }) => {
  return getQuestion(answer, QuestionFlow.questions)
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
