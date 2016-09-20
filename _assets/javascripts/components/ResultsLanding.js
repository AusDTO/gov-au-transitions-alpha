import React from 'react'
import ResultsTilesConnect from '../containers/ResultsTilesConnect'
import AsideNavLink from '../containers/AsideNavLink'
import LocationChangerLinker from '../containers/LocationChangerLinker'
import ResultsMenu from './ResultsMenu'


const Results = ({ show, showResults, resultSets }) => {
  if (!show) {
    return (<div />)
  }

  return (
    <div className="results-landing">
      <div className='hero-med'>
        <div className='wrapper'>
          <h1>Explore your results</h1>
        </div>
      </div>
      <main role='main'>
        <article>
          <aside className="sidebar">
            {showResults ? <ResultsMenu resultSets={resultSets}/> : ''}
            <AsideNavLink className="hide-for-mobile" />
          </aside>
          <article className='transition-main content-main'>
            <div className="abstract area-abstract">
              <p>Find out how to apply for government support and explore useful services in your area.</p>
              <LocationChangerLinker className="margin" />
            </div>

            <ResultsTilesConnect />
            <h2 className="secondary-title">Also explore</h2>
            <ul className="secondary-links">
              <li><a href="https://gov-au-beta.apps.platform.digital.gov.au/help-for-older-people/managing-medication">Managing medication</a></li>
              <li><a href="https://gov-au-beta.apps.platform.digital.gov.au/help-for-older-people/considering-consent-needs">Consider consent needs</a></li>
              <li><a href="https://gov-au-beta.apps.platform.digital.gov.au/help-for-older-people/support-for-carers">Support for carers</a></li>
            </ul>
          </article>
        </article>
        <article>
            <AsideNavLink className="show-for-mobile" />
        </article>
      </main>
    </div>
  )

}

export default Results
