import { connect } from 'react-redux'
import { QuestionFlow } from '../questions'
import ResultsContents from '../components/ResultsContents'
import { getResultsList } from '../helpers'

const mapStateToProps = (state) => {
  return {
    resultSets: getResultsList(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const ResultsContentsLinker = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsContents)

export default ResultsContentsLinker
