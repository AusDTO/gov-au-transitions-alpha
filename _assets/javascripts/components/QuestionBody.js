import React, { PropTypes } from 'react'
import Geosuggest from 'react-geosuggest'

const addMore = () => {
  console.log("add more has been clicked");
}
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
    case "location":
      return [(
        <Geosuggest
          key={name}
          country='au'
          initialValue={selectedValues[0]}
          types={['(regions)']}
          placeholder="Please enter a suburb, town or postcode"
          onSuggestSelect={onChange}
          />
      )]
    case "locationaddmore":
      if (selectedValues.length) {

        let inputs = selectedValues.map(value => {
          let val
          if (value === 'addmore') {
            val = ""
            value += selectedValues.length
          } else {
            val = value
          }
          return (
          <Geosuggest
            key={value}
            country='au'
            initialValue={val}
            types={['(regions)']}
            placeholder="Please enter a suburb, town or postcode"
            onSuggestSelect={onChange}
            />
        )})
        inputs.push((
          <a key="addmorelink" href="#" className="addmore" onClick={onChange.bind(null, 'addmore')}>Add more</a>
        ))
        return inputs
      } else {
        return [(
          <Geosuggest
            key={name}
            country='au'
            initialValue=""
            types={['(regions)']}
            placeholder="Please enter a suburb, town or postcode"
            onSuggestSelect={onChange}
            />
        )]
      }
    default:
      return [(<span key={name}>{name}</span>)]
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
