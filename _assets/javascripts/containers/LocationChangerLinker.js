import { connect } from 'react-redux'
import LocationChanger from '../components/LocationChanger'
import { getLocationAnswer } from '../helpers'
import { moveTo } from '../actions'

const mapStateToProps = (state, ownProps) => {
  const location = getLocationAnswer(state.previousAnswers)
  return {
    locationShort: location && location.short,
    locationLong: location && location.long,
    locationIndex: location && location.index,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEdit: (index) => {
      dispatch(moveTo(index))
    }
  }
}

const LocationChangerLinker = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationChanger)

export default LocationChangerLinker
