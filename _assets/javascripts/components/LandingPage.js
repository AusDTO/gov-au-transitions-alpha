import React from 'react'
import { Link } from 'react-router';

const LandingPage = () => {
  return (
    <main role="main">
      <section className="transition-main content-main">
        <div>This is an expample of where the landing page may go</div>
        <Link to="/question">Get Started</Link>
      </section>
    </main>
  )
}

export default LandingPage
