import { connect } from 'react-redux'
import ResultsCategoryTiles from '../components/ResultsCategoryTiles'
import { getResultsList } from '../helpers'

const mapStateToProps = (state) => {
  return {
    resultSets: getResultsList(state)
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
