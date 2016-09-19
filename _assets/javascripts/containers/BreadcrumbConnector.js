import React from 'react'
import { connect } from 'react-redux'
import Breadcrumbs from '../components/Breadcrumbs'
import { QuestionFlow } from '../questions'
import { getIndexFromId } from '../helpers'



const generateCrumbs = (router, { results }) => {
  const pathname = router.location.pathname
  let crumbs = [
    {
      href: '/',
      label: 'Help for older people'
    }
  ]

  if (pathname.indexOf('/question') === 0) {
    let index = router.params && router.params.id ? getIndexFromId(router.params.id) : 0
    crumbs.push({
      label: 'Questions'
    })
  }

  if (pathname.indexOf('/results') === 0) {
    const resultId = router.params && router.params.id
    crumbs.push({
      label: 'Results',
      href: resultId && '/results'
    })

    if (resultId) {
      const result = results.filter(r => r.id === resultId)[0]
      crumbs.push({
        label: result.title
      })

    }
  }

  return crumbs
}

const mapStateToProps = ({ router }) => {

  return {
    crumbs: generateCrumbs(router, QuestionFlow)
  }
}

const mapDispatchToProps = () => {
  return {}
}


const BreadcrumbConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(Breadcrumbs)

export default BreadcrumbConnector
