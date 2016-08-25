import { connect } from 'react-redux'
import { QuestionFlow } from '../questions'
import QuestionBody from '../components/QuestionBody'
import { moveNext, onSelect } from '../actions'

const getQuestion = (index, questions, answers, previousAnswers) => {
  if (index >= questions.length) {
    return {
      index: 0,
      questionId: "q" + index,
      name: "",
      legend: "",
      type: "",
      allValues: [],
      selectedValues: [],
      glossary: [],
      previousAnswers: []
    }
  }
  return {
    index,
    questionId: "q" + index,
    name: questions[index].name,
    legend: questions[index].legend,
    type: questions[index].type,
    allValues: questions[index].values,
    selectedValues: answers,
    glossary: questions[index].glossary,
    previousAnswers
  }
}

const mapStateToProps = ({ currentQuestion, currentAnswers, previousAnswers }) => {
  return getQuestion(currentQuestion, QuestionFlow.questions, currentAnswers, previousAnswers)
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (index, currentAnswers, previousAnswers) => {
      dispatch(moveNext(index, currentAnswers, previousAnswers))
    },
    onChange: (value, index, currentAnswers, previousAnswers) => {
      dispatch(onSelect(value, index, currentAnswers, previousAnswers))
    }
  }
}

const QuestionBodyLinker = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionBody)

export default QuestionBodyLinker
