import { connect } from 'react-redux'
import { QuestionFlow } from '../questions'
import ResultsLanding from '../components/ResultsLanding'

const mapStateToProps = (state) => {
  return {
    //show: state.currentQuestion >= QuestionFlow.questions.length
    show: true
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const ResultsLandingConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsLanding)

export default ResultsLandingConnect
