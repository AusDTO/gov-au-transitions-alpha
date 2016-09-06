import { connect } from 'react-redux'
import { QuestionFlow } from '../questions'
import ResultsCategory from '../components/ResultsCategory'
import { getResultsList } from '../helpers'
import { resultCheck } from '../actions'

const getResultCatFromId = (id, results) => {
  for (let i = 0; i < results.length; i += 1) {
    if (results[i].id === id) {
      return results[i]
    }
  }
}

const mapStateToProps = (state) => {
  const { router } = state
  let id = router.params && router.params.id ? router.params.id : 0
  let show = router.location && router.location.pathname.indexOf('results') > -1
  return {
    show: true,
    result: getResultCatFromId(id, getResultsList(state)),
    resultSteps: state.resultSteps,
    showResults: show,
    resultSets: show ? getResultsList(state) : null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (value) => {
      dispatch(resultCheck(value))
    }
  }
}

const ResultsCategoryConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsCategory)

export default ResultsCategoryConnect
