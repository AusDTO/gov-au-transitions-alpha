import { connect } from 'react-redux'
import { QuestionFlow } from '../questions'
import QuestionBody from '../components/QuestionBody'
import { moveNext, onSelect } from '../actions'

const getQuestion = (index, questions, answers) => {
  if (index >= questions.length) {
    return {
      questionId: "q" + index,
      name: "",
      legend: "",
      type: "",
      allValues: [],
      selectedValues: []
    }
  }
  return {
    questionId: "q" + index,
    name: questions[index].name,
    legend: questions[index].legend,
    type: questions[index].type,
    allValues: questions[index].values,
    selectedValues: answers
  }
}

const mapStateToProps = (state) => {
  return getQuestion(state.currentQuestion, QuestionFlow.questions, state.currentAnswers)
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => {
      dispatch(moveNext())
    },
    onChange: (value) => {
      if (typeof value !== "string") {
        dispatch(onSelect(value.label))
      } else {
        dispatch(onSelect(value))
      }
    }
  }
}

const QuestionBodyLinker = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionBody)

export default QuestionBodyLinker
