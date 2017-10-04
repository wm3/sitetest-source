import React from 'react'
import Helmet from 'react-helmet'
import Link from '../utils/link'
import GLink from 'gatsby-link'
import i18n from '../utils/i18n'

export default function Index () {
  return (
    <div>
      <h2><Text id='intro' /></h2>
      <Link to='/page-2/'><Text id='goToSessionList' /></Link><br />
      <GLink to='/'>Japanese Top</GLink>&nbsp;
      <GLink to='/en'>English Top</GLink>
      <Helmet>
        {// <link rel="css" href={CustomCss} />
        }
      </Helmet>
    </div>
  )
}

const Text = i18n({
  en: {
    intro: `Top Page.`,
    goToSessionList: `Go to session list`
  },

  ja: {
    intro: `トップページです。`,
    goToSessionList: `セッションリストへ`
  }
})
