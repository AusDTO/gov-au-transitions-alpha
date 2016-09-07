import { connect } from 'react-redux'
import { QuestionFlow } from '../questions'
import QuestionBody from '../components/QuestionBody'
import { moveNext, onSelect } from '../actions'
import { getIndexFromId, getIdFromIndex, getQuestionLegend } from '../helpers'

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
    legend: getQuestionLegend(questions[index].legend),
    type: questions[index].type,
    allValues: questions[index].values,
    selectedValues: answers,
    glossary: questions[index].glossary
  }
}

const mapStateToProps = ({ router, currentQuestion, currentAnswers }) => {
  let index = router.params && router.params.id ? getIndexFromId(router.params.id) : 0
  return getQuestion(index, QuestionFlow.questions, currentAnswers)
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => {
      dispatch(moveNext())
    },
    onChange: (value) => {
      dispatch(onSelect(value))
    }
  }
}

const QuestionBodyLinker = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionBody)

export default QuestionBodyLinker
