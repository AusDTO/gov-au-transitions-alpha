import { connect } from 'react-redux'
import { QuestionFlow } from '../questions'
import ResultsCategory from '../components/ResultsCategory'
import { getResultsList } from '../helpers'

const getResultCatFromId = (id, results) => {
  for (let i = 0; i < results.length; i += 1) {
    if (results[i].id === id) {
      return results[i]
    }
  }
}

const mapStateToProps = (state) => {
  let id = state.router.params && state.router.params.id ? state.router.params.id : 0
  return {
    show: true,
    result: getResultCatFromId(id, getResultsList(state)),
    resultSteps: state.resultSteps
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
