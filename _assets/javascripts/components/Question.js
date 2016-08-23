import React from 'react'
import QuestionHeaderHandler from '../containers/QuestionHeaderHandler'
import QuestionBodyLinker from '../containers/QuestionBodyLinker'
import AsideNav from './AsideNav'

const Question = ({current, total}) => {
  if (current >= total) {
    return (<div />)
  } else {
    return (
      <main role="main">
        <AsideNav results={false}/>
        <section className="transition-main content-main">
          <QuestionHeaderHandler />
          <QuestionBodyLinker />
        </section>
      </main>
    )
  }

}

export default Question
