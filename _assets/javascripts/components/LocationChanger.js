import React from 'react'

const LocationChanger = ({prefix, className, locationShort, locationIndex, onEdit}) => {
  if (!locationIndex) {
    return <div />
  }

  if (!prefix) {
    prefix = 'Displaying results for'
  }

  return (
  <h3 className={"location-changer " + className}>{prefix} {locationShort} <a href="#" onClick={e => {
        e.preventDefault()
        onEdit(locationIndex)
      }}>Change area</a>
    </h3>
  )
}

export default LocationChanger
