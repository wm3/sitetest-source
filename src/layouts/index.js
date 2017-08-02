import React from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { lang } from '../utils/i18n.js'

export default withRouter(class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
  }

  render () {
    const thisLang = lang(this.props.location)
    return (
      <div lang={thisLang}>
        <Helmet
          title='Gatsby Default Starter'
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        />
        <div
          style={{
            background: `rebeccapurple`,
            marginBottom: `1.45rem`
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `1.45rem 1.0875rem`
            }}
          >
            <h1 style={{ margin: 0 }}>
              <Link
                to='/'
                style={{
                  color: 'white',
                  textDecoration: 'none'
                }}
              >
                Gatsby
              </Link>
            </h1>
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0
          }}
        >
          {this.props.children()}
        </div>
      </div>
    )
  }
})
