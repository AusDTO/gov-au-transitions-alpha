import React, { Component, PropTypes } from 'react'

class AsideNav extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      open: false
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <aside className={this.props.className}>
        {this.props.showResults ? (
          <div className="actions">
            <a role="button" href="#">Email my results <i className="fa fa-chevron-right" aria-hidden="true" /></a>
            <a role="button" href="#">Print my results <i className="fa fa-chevron-right" aria-hidden="true" /></a>
          </div>
        ) : ""}

        {false ? (
          <div className={"question-nav sidebar--answers"} aria-label="main navigation">
            <a className="your-answers" onClick={this.handleClick}>Edit your answers</a>
            <div aria-expanded={this.state.open}>
            {this.props.questions.filter(v => v && v.answers.length).map(question => (
              <div key={question.index} className="answer-component">
                <dl>
                  <dt>{question.question}</dt>
                  {question.answers.map(answer => (<dd key={answer.replace(" ", "_")}>{answer}</dd>))}
                </dl>
                <a href={"/" + question.index} onClick={(e) => {
                  e.preventDefault()
                  this.props.onEdit(question.index)
                }}>Change</a>
              </div>
            ))}
            </div>
          </div>
        ) : ""}
      </aside>
    )
  }
}

AsideNav.propTypes = {
  showResults: PropTypes.bool,
  resultSets: PropTypes.array,
  questions: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(React.PropTypes.oneOfType([        // any
              React.PropTypes.string,
              React.PropTypes.object ]))
    //answers: PropTypes.arrayOf(PropTypes.object)
  }))
  // list: PropTypes.arrayOf(PropTypes.shape({
  //   term: PropTypes.string.isRequired,
  //   description: PropTypes.string.isRequired
  // }))
}

export default AsideNav
