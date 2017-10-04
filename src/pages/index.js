import React from 'react'
import Helmet from 'react-helmet'

export default function Index () {
  return (
    <div>
      <Helmet>
        {// <link rel="css" href={CustomCss} />
        }
        abc
        <h1><marquee>こんにちは!!!</marquee></h1>
      </Helmet>
    </div>
  )
}
