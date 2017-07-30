import React from "react"
import { resolve } from "./i18n"
import GLink from "gatsby-link"
import { withRouter } from "react-router"

/**
 * リンクを提供します。
 *
 * リンク先の URL は現在の言語設定を考慮して切り替わります。
 */
export default withRouter(function Link({ location, to, children }) {
  return <GLink to={resolve(location, to)}>{children}</GLink>
});
