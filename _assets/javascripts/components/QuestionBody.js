import React, { PropTypes } from 'react'

const getFieldset = (type, values, name, selectedValues, onChange) => {
  switch (type) {
    case "radio":
    case "checkbox":
      return values.map(field => (
        <span key={field.value}>
          <input name={name}
                type={type}
                id={field.value}
                value={field.value}
                checked={selectedValues.indexOf(field.value) > -1 ? true : false}
                onChange={onChange.bind(null, field.value)} />
          <label htmlFor={field.value}>{field.label}</label>
        </span>
      ))
    case "text":
      let input
      return [(
        <input type="text"
          key={name}
          name={name}
          id={name}
          value={selectedValues[0]}
          ref={node => {input = node}}
          onChange={e => {
            onChange.bind(null, e.target.value)
          }}/>
      )]
    default:
      return [(<span>{name}</span>)]
  }
}

const QuestionBody = ({questionId, name, legend, type, allValues, selectedValues, onSubmit, onChange}) => {
  return (
    <form data-current-question={questionId}
        method="get"
        action={"/" + questionId + "/"}
        onSubmit={e => {
          e.preventDefault()
          onSubmit()
        }}>
      <fieldset>
        <legend>{legend}</legend>
        {getFieldset(type, allValues, name, selectedValues, onChange)}
      </fieldset>
      <button type="submit">Next  <i className="fa fa-chevron-right" aria-hidden="true"></i></button>
    </form>
  )
}

QuestionBody.PropTypes = {
  questionId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired),//.isRequired
  selectedValues: PropTypes.arrayOf(PropTypes.number).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export default QuestionBody
