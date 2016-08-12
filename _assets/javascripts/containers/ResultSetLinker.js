import { connect } from 'react-redux'
import { QuestionFlow } from '../questions'
import ResultSet from '../components/ResultSet'
/**
@TODO :-
Here there needs to be something that checks the results based on the selection
and returns the correct array rather than everything
**/
const mapStateToProps = (state) => {
  return {
    resultSets: QuestionFlow.results
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
