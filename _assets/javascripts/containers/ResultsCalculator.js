import { connect } from 'react-redux'
import { QuestionFlow } from '../questions'
import Results from '../components/Results'

const mapStateToProps = (state) => {
  return {
    show: state.currentQuestion >= QuestionFlow.questions.length
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const ResultsCalculator = connect(
  mapStateToProps,
  mapDispatchToProps
)(Results)

export default ResultsCalculator
