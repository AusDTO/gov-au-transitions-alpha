import React from 'react'
import QuestionHeaderHandler from '../containers/QuestionHeaderHandler'
import QuestionBodyLinker from '../containers/QuestionBodyLinker'

const Question = () => (
  <main role="main">
    <section className="transition-main content-main">
      <QuestionHeaderHandler />
      <QuestionBodyLinker />
    </section>
  </main>
)

export default Question
