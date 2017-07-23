import React from "react"
import { resolve } from "./i18n"
import GLink from "gatsby-link"
import { withRouter } from "react-router"

export default withRouter(function Link({ location, to, children }) {
  return <GLink to={resolve(location, to)}>{children}</GLink>
});
