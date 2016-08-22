import React from 'react'

const Question = ({results}) => (
  <aside className="sidebar" id="nav">
    <button aria-controls="local-nav" className="local-nav-toggle">Your Answers</button>
    <nav className="local-nav" aria-label="main navigation" id="null" aria-expanded="false">
      <div className="your-answers">Your Answers</div>
      {results ? (
        <span>
          <button>Send to MyAgedCare</button><br />
          <a>Why send my results to my aged care?</a>
        </span>
      ) : ""}
    </nav>
  </aside>
)

export default Question
