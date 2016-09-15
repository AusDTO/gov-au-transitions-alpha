import React, { PropTypes } from 'react'
import Geosuggest from 'react-geosuggest'
import Glossary from './Glossary'
import Autocomplete from '../lib/Autocomplete'
import {
  replaceAtIndex,
  styles,
  autocompleteMatchStateToTerm,
  getLabelFromValue
} from '../helpers'

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
          placeholder=''
          country='au'
          initialValue={selectedValues[0]}
          types={['(regions)']}
          onSuggestSelect={val => onChange(val.label)}
          />
      )]
    case "locationaddmore":
      let locationVals = selectedValues.length > 0 ? selectedValues : [""]
      let locations = locationVals.map((value, index) => {
        let id = name + index
        return (
          <Geosuggest
            key={id}
            placeholder=''
            country='au'
            initialValue={value}
            types={['(regions)']}
            onSuggestSelect={(value) => onChange(replaceAtIndex(locationVals, index, value.label))}
            />
        )
      })

      if (locationVals[locationVals.length - 1] !== "") {
        locations.push((
          <a key="addmorelink"
            href="#" className="addmore"
            onClick={(e) => {
              onChange(locationVals.concat(""))
              e.preventDefault()
            }}>Add more</a>
        ))
      }

      return locations
    case "autocomplete":
    case "autocompleteaddmore":
      let currVals = selectedValues.length > 0 ? selectedValues : [""]
      let autocompletes = currVals.map((value, index) => {
        let id = name + index
        return (
          <Autocomplete
            key={id}
            value={selectedValues[index] ? getLabelFromValue(values, selectedValues[index]) : ""}
            inputProps={{name: id, id: id}}
            items={values}
            getItemValue={(item) => item.value}
            wrapperStyle={styles.wrapperStyle}
            shouldItemRender={autocompleteMatchStateToTerm}
            //sortItems={sortStates}
            onChange={(event, value) => onChange(replaceAtIndex(currVals, index, value))}
            onSelect={(value) => onChange(replaceAtIndex(currVals, index, value))}
            renderItem={(item, isHighlighted) => (
              <div
                style={isHighlighted ? styles.highlightedItem : styles.item}
                key={item.value}
              >{item.label}</div>
            )}
          />
        )
      })

      if (currVals[currVals.length - 1] !== "" && type === 'autocompleteaddmore') {
        autocompletes.push((
          <a key="addmoreautocomplete"
            href="#" className="addmore"
            onClick={(e) => {
              onChange(currVals.concat(""))
              e.preventDefault()
            }}>Add more</a>
        ))
      }
      return autocompletes
    case "crisis":
      return (
      <div className="crisis-callout">
        <h4>If you need support straight away you can call:</h4>
        <ul className="list-horizontal">
          <li className="offset-item">
            <div className="offset-title">
              <h4><a href="tel:000000">000</a></h4>
            </div>
            <div>
              <p><strong>Triple zero (000) </strong></p>
              <p>For urgent medical help</p>
            </div>
          </li>
          <li className="offset-item">
            <div className="offset-title">
              <h4><a href="tel:000000">131 114</a></h4>
            </div>
            <div>
              <p><strong>Lifeline 24/7 </strong></p>
              <p>For support in an emotional crisis</p>
            </div>
          </li>
          <li className="offset-item">
            <div className="offset-title">
              <h4><a href="tel:000000">1800 059 059</a></h4>
            </div>
            <div>
              <p><strong>Emergency respite support </strong></p>
              <p>For urgent help caring for someone</p>
            </div>
          </li>
        </ul>
          <div className="abstract">
          <p>I’m OK thanks, I can continue to the next step.</p>
          </div>
      </div>
      )
    default:
      return [(<span key={name}>{name}</span>)]
  }
}

const QuestionBody = ({questionId, name, legend, type, allValues, selectedValues, glossary, onSubmit, onChange}) => {
  if (type === "") {
    return <div></div>
  }
  let buttonText = 'Next'
if (type === 'crisis') {
   buttonText = 'Continue'
}

  return (
    <form data-current-question={questionId} className={"form-" + type}
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
      <Glossary list={glossary} />
      <button type="submit">{buttonText}  <i className="fa fa-chevron-right" aria-hidden="true"></i></button>
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
