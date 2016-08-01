import React, { PropTypes } from 'react'

const QuestionHeader = ({title, onClick, index, total}) => {
  if (index > total) {
    return <div></div>
  }
  return (
    <div className="question-header">
      <a href="#"
      className="fa-chevron-left"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}>Back</a>
      <div>Question {index}/{total}</div>
      <h3>{title}</h3>
    </div>
  )
}

QuestionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}

export default QuestionHeader
