import React, { Component, PropTypes } from 'react'

class Accordion extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      open: true
    }
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({open: !this.state.open})
  }

  render() {
    let theClassName = "accordion-panel " + this.props.className
    return (
      <section open={this.state.open} aria-expanded={this.state.open} className="accordion">
        <div className='accordion-button'>
          <span className="accordion-content">{this.props.summary}</span>
          <span className='accordion-controlls'>
            { false ? (
              <span>
                <input name={this.props.inputName}
                  id={this.props.inputName}
                  type="checkbox"
                  value="true"
                  checked={this.props.inputChecked}
                  onChange={this.props.inputOnChange.bind(null, this.props.inputName)}
                 />
                 <label htmlFor={this.props.inputName}>{this.props.inputLabel}</label>
              </span>
            ) : ""}
            <a href='#' className='accordion-hide' onClick={this.handleClick}>{this.state.open ? 'Hide' : 'Show'}</a>
          </span>
        </div>
        <div className={theClassName}>
            {this.props.children}
        </div>
      </section>
    )
  }
}

Accordion.propTypes = {
  summary: PropTypes.string.isRequired,
  inputName: PropTypes.string,
  inputLabel: PropTypes.string,
  inputChecked: PropTypes.bool,
  inputOnChange: PropTypes.func,
  children: PropTypes.any.isRequired
}

export default Accordion
