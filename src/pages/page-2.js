import React from 'react'
import Link from '../utils/link'
import i18n from '../utils/i18n'

export default function page2 ({ data }) {
  const timetable = data.allTimetable.edges[0].node.sessions

  const items = timetable.map(s =>
    <div key={`session-${s.id}`}>
      <h4>{s.title}</h4>
      <p>{s.description}</p>
    </div>
  )

  return (
    <div>
      <h1><Text id='title' /></h1>
      {items}
      <Link to='/'>Go back to the homepage</Link>
    </div>
  )
}

const Text = i18n({
  en: {
    title: `Session`
  },

  ja: {
    title: `セッション`
  }
})

export const pageQuery = graphql`
query AllTimeline {
  allTimetable {
    edges {
      node {
        id
        sessions {
          id
          speakers
          description
          title
        }
      }
    }
  }
}
`
