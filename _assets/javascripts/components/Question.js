import React from 'react'
import { Line } from 'rc-progress'

import QuestionHeaderHandler from '../containers/QuestionHeaderHandler'
import QuestionBodyLinker from '../containers/QuestionBodyLinker'
import AsideNavLink from '../containers/AsideNavLink'

const Question = ({current, total}) => {
  if (current >= total) {
    return (<div />)
  } else {
    return (
      <main role="main" className="question-wrapper">
        <article className="transition-main content-main">
          <Line percent={current / total * 100} strokeWidth="1" trailColor="#F0F3F5" strokeColor="#18788d" />
          <QuestionHeaderHandler />
          <QuestionBodyLinker />
        </article>
      </main>
    )
  }

}

export default Question
