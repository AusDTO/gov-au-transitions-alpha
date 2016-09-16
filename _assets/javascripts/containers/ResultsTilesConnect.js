import { connect } from 'react-redux'
import ResultsCategoryTiles from '../components/ResultsCategoryTiles'
import { getResultsList } from '../helpers'

const mapStateToProps = (state, ownProps) => {
  return {
    resultSets: getResultsList(state),
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const ResultsTilesConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsCategoryTiles)

export default ResultsTilesConnect
