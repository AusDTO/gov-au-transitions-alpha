import React from 'react'

const AsideNav = ({showResults, questions, onEdit}) => (
  <aside className="sidebar" id="nav">
    <button aria-controls="local-nav" className="local-nav-toggle">Your Answers</button>
    <nav className="question-nav" aria-label="main navigation" id="null" aria-expanded="false">
      <div className="your-answers">Your Answers</div>
      {questions.map(question => (
        <div key={question.index} className="answer-component">
          <dl>
            <dt>{question.question}</dt>
            {question.answers.map(answer => (<dd key={answer.replace(" ", "_")}>{answer}</dd>))}
          </dl>
          <a href={"/" + question.index} onClick={(e) => {
            e.preventDefault()
            onEdit(question.index)
          }}>Change</a>
        </div>
      ))}
      {showResults ? (
        <span>
          <button>Send to MyAgedCare</button><br />
          <a>Why send my results to my aged care?</a>
        </span>
      ) : ""}
    </nav>
  </aside>
)

export default AsideNav
