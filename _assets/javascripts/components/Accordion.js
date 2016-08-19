import React, { Component, PropTypes } from 'react'

class Accordion extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      open: false
    }
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({open: !this.state.open})
  }

  render() {
    let theClassName = "accordion-panel " + this.props.className
    return (
      <section aria-expanded={this.state.open}>
        <a className="accordion-button" onClick={this.handleClick}>
          {this.props.badge && this.props.badge !== "" ? (<span className="badge--default">{this.props.badge}</span>) : ""}
          <span className="accordion-content">{this.props.summary}</span>
        </a>
        <div className={theClassName}>
            {this.props.children}
        </div>
      </section>
    )
  }
}

Accordion.propTypes = {
  summary: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default Accordion
