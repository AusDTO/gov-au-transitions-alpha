import React from 'react'
import QuestionHeaderHandler from '../containers/QuestionHeaderHandler'
import QuestionBodyLinker from '../containers/QuestionBodyLinker'
import AsideNavLink from '../containers/AsideNavLink'

const Question = ({current, total}) => {
  if (current >= total) {
    return (<div />)
  } else {
    return (
      <main role="main" className="question-wrapper">
        <AsideNavLink className="sidebar" />
        <article className="transition-main content-main">
          <QuestionHeaderHandler />
          <QuestionBodyLinker />
        </article>
      </main>
    )
  }

}

export default Question
