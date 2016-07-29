import React, { PropTypes } from 'react'

const QuestionBody = ({questionId, name, legend, type, allValues, selectedValues, onSubmit, onChange}) => {
  let changer = e => {alert('hello')}
  // let fieldset = allValues.map(field => (
  //   <span key={field.value}>
  //     <input name={name}
  //           type={type}
  //           value={field.value}
  //           checked={selectedValues.indexOf(field.value) !== -1 ? true : false}
  //           onChange={changer} />
  //     <label htmlFor={field.value}>{field.label}</label>
  //   </span>
  // ))


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
        {allValues.map(field => {
          let value = field.value;
          return (
          <span key={field.value}>
            <input name={name}
                  type={type}
                  value={field.value}
                  checked={ false }
                  onChange={onChange.bind(this, value)} />
            <label htmlFor={field.value}>{field.label}</label>
          </span>
        )
        })}
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
