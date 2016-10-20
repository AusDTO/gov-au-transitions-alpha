import { connect } from 'react-redux'
import ResultSet from '../components/ResultSet'
import { getResultsList } from '../helpers'
import { resultCheck, moveTo } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps
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
