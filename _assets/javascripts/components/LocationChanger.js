import React, { PropTypes } from 'react'

const LocationChanger = ({prefix, className, locationShort, locationIndex, onEdit}) => {
  if (!locationIndex) {
    return <div />
  }

  return (
    <h3 className={"location-changer " + className}>{prefix} {locationShort} <a href="#" onClick={e => {
        e.preventDefault()
        onEdit(locationIndex)
      }}>Change area</a>
    </h3>
  )
}

LocationChanger.defaultProps = {
  prefix: 'Displaying results for',
  className: ''
}

LocationChanger.propTypes = {
  prefix: PropTypes.string,
  className: PropTypes.string,
  locationShort: PropTypes.string.isRequired,
  locationIndex: PropTypes.number.isRequired,
  onEdit: PropTypes.func.isRequired
}

export default LocationChanger
