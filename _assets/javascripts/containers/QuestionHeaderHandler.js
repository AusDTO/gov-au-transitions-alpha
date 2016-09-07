import { connect } from 'react-redux'
import { QuestionFlow } from '../questions'
import QuestionHeader from '../components/QuestionHeader'
import { moveBack } from '../actions'
import { getQuestionTitle, getIndexFromId } from '../helpers'

const getQuestion = (state, questions) => {
  const { language, router } = state
  let index = router.params && router.params.id ? getIndexFromId(router.params.id) : 0
  return {
    title: index >= questions.length ? '' : getQuestionTitle(questions[index].question, language),
    index: index + 1,
    total: questions.length
  }
}

const mapStateToProps = (state) => {
  return getQuestion(state, QuestionFlow.questions)
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
