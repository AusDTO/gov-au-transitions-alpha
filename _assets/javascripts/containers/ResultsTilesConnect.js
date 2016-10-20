import { connect } from 'react-redux'
import ResultsCategoryTiles from '../components/ResultsCategoryTiles'
import { getResultsList } from '../helpers'

const mapStateToProps = (state, ownProps) => {
  const { router } = state
  return {
    resultSets: getResultsList(state),
    currentId: router && router.params && router.params.id,
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
