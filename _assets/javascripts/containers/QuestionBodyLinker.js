import { connect } from 'react-redux'
import { QuestionFlow } from '../questions'
import QuestionBody from '../components/QuestionBody'
import { moveNext, onSelect } from '../actions'

const mapStateToProps = (state) => {
  return {
    questionId: "q" + state.currentQuestion,
    name: QuestionFlow.questions[state.currentQuestion].name,
    legend: QuestionFlow.questions[state.currentQuestion].legend,
    type: QuestionFlow.questions[state.currentQuestion].type,
    allValues: QuestionFlow.questions[state.currentQuestion].values,
    selectedValues: state.currentAnswers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => {
      dispatch(moveNext())
    },
    onChange: (value) => {
      console.log(value)
      dispatch(onSelect(value))
    }
  }
}

const QuestionBodyLinker = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionBody)

export default QuestionBodyLinker
