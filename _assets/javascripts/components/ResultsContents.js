import React from "react"

const ResultsContents = ({resultSets}) => {
  return (
    <nav className="index-links">
    <ul>
      {resultSets.map(set => {
      return (
        <li key={set.id}><a href={"#" + set.id}>{set.title}</a></li>
      )
      })}
    </ul>
    </nav>
  )

}

export default ResultsContents
