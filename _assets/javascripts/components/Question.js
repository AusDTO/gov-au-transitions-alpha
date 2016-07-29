import React from 'react'
import QuestionHeaderHandler from '../containers/QuestionHeaderHandler'
import QuestionBodyLinker from '../containers/QuestionBodyLinker'

const Question = () => (
  <section className='form-wrapper'>
    <QuestionHeaderHandler />
    <QuestionBodyLinker />
  </section>
)

export default Question
