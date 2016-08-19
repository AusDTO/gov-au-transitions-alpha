import React from 'react'
import QuestionHeaderHandler from '../containers/QuestionHeaderHandler'
import QuestionBodyLinker from '../containers/QuestionBodyLinker'
import AsideNav from './AsideNav'

const Question = () => (
  <main role="main">
    <AsideNav />
    <section className="transition-main content-main">
      <QuestionHeaderHandler />
      <QuestionBodyLinker />
    </section>
  </main>
)

export default Question
