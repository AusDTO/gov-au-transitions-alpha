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
      selectedValues: [],
      glossary: []
    }
  }
  return {
    questionId: "q" + index,
    name: questions[index].name,
    legend: questions[index].legend,
    type: questions[index].type,
    allValues: questions[index].values,
    selectedValues: answers,
    glossary: questions[index].glossary
  }
}

const mapStateToProps = ({ answer }) => {
  return getQuestion(answer.currentQuestion, QuestionFlow.questions, answer.currentAnswers)
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => {
      dispatch(moveNext())
    },
    onChange: (value) => {
      if (typeof value !== "string") {
        dispatch(onSelect(value))
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
