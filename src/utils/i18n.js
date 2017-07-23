import React from "react"
import { withRouter } from "react-router"

const enPrefix = new RegExp("^" + (__PREFIX_PATHS__ ? __PATH_PREFIX__ : "") + "/en(/|$)")

export function lang(location) {
  return location.pathname.match(enPrefix) ? "en" : "ja"
}

export function resolve(location, path) {
  if (!path.match(/^\//)) throw Error(`path must begin with '/': ${path}`)
  return lang(location) === "en" ? `/en${path}` : path
}

export default function i18n(texts) {
  return withRouter(function({ id, location }) {
    const ln = lang(location);
    const local = texts[ln];
    if (!local) throw new Error(`unexpected lang: ${ln}`);

    const t = local[id];
    if (!t) throw new Error(`text not found: ${id}, lang=${ln}`);
    return (<span>{t}</span>);
  });
}
