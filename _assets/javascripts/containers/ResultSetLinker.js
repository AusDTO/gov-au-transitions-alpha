import { connect } from 'react-redux'

import ResultSet from '../components/ResultSet'
import { getResultsList } from '../helpers'
import { resultCheck } from '../actions'

const mapStateToProps = (state) => {
  return {
    resultSets: getResultsList(state),
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

const ResultSetLinker = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultSet)

export default ResultSetLinker
