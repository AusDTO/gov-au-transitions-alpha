import { connect } from 'react-redux'
import { QuestionFlow } from '../questions'
import Question from '../components/Question'
import { getIndexFromId } from '../helpers'
// import { moveNext, onSelect } from '../actions'

const mapStateToProps = ({ router }) => {
  let index = router.params && router.params.id ? getIndexFromId(router.params.id) : 0
  return {
    current: index,
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
