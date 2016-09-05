import { connect } from 'react-redux'
import { QuestionFlow } from '../questions'
import ResultsLanding from '../components/ResultsLanding'
import { getResultsList } from '../helpers'

const mapStateToProps = (state) => {
  const { router } = state
  let show = router.location && router.location.pathname.indexOf('results') > -1
  return {
    //show: state.currentQuestion >= QuestionFlow.questions.length
    show: true,
    showResults: show,
    resultSets: show ? getResultsList(state) : null
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
