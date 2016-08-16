import React from "react"

const ResultsContents = ({resultSets}) => {
  return (
    <nav className="index-links">
    <ul>
      {resultSets.map(set => {
      return (
        <li><a href="javascript:void(0)">{set.title}</a></li>
      )
      })}
    </ul>
    </nav>
  )

}

export default ResultsContents
