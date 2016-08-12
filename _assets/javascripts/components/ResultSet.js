import React from 'react'
import Accordion from './Accordion'

const getAccordions = list => {
  //@TODO need to return the key as unique not doing this at the moment
  return list.map(item =>  (
      <Accordion summary={item.title}>
        <span>the accordion content goes here</span>
      </Accordion>
  )
  )
}

const ResultSet = ({resultSets}) => {
  return (
    <div>
      {resultSets.map(set => {
      return (
        <div key={set.id}>
          <h3>{set.title}</h3>
          <div className="abstract">{set.abstract}</div>
          {getAccordions(set.list)}
        </div>
      )
      })}
    </div>
  )

}

export default ResultSet
