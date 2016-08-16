import { connect } from 'react-redux'

import ResultSet from '../components/ResultSet'
import { getResultsList } from '../helpers'

const mapStateToProps = (state) => {
  return {
    resultSets: getResultsList(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const ResultSetLinker = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultSet)

export default ResultSetLinker
