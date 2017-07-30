import React from "react"
import { withRouter } from "react-router"

//
// 国際化対応をするための処理を提供します。
//
// ### 使い方
//
// `i18n()` 関数のドキュメントを参考にしてください。
//
//
// ### 国際化対応の実装方法
//
// Gatsby 自身は国際化機能を提供していないので、自前で用意しています。
// 手軽なものがなかったので国際化のライブラリも使っていません。
//
// 判別方法は「`/en` で始まるパスは英語サイト、それ以外は日本語サイト」というルールにしています。
// Gatsby は React Router を使っているため、パスの取得には React Router の `withRouter`
// などを使って location を取得する必要があります。
//
// なお `i18n()` などを使う場合は内部で `withRouter` を使っているので呼び出し側で
// import する必要はありません。
//

const enPrefix = new RegExp("^" + (__PREFIX_PATHS__ ? __PATH_PREFIX__ : "") + "/en(?:/|$)")


// ----------------------------------------------------------------
//     高レベル API
// ----------------------------------------------------------------

/**
 * 国際化テキストを提供するコンポーネントを作成します。
 *
 * @param {Object} texts テキストの定義
 * @param {Object} texts.en 英語のテキスト定義
 * @param {Object} texts.ja 日本語のテキスト定義
 *
 * @example
 * const Text = i18n({
 *   en: {
 *     title: `English Page`,
 *     ...
 *   },
 *   ja: {
 *     title: `日本語ページ`,
 *     ...
 *   }
 * });
 *
 * export default function index() {
 *   return (<h1><Text id="title" /></h1>)
 * }
 * 
 */
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


// ----------------------------------------------------------------
//     低レベル API
// ----------------------------------------------------------------

/**
 * 現在のページの言語を取得します。
 *
 * @param {Object} location 
 */
export function lang(location) {
  return location.pathname.match(enPrefix) ? "en" : "ja"
}

/**
 * 指定のパスに対して現在の言語設定のプレフィックスを追加します。
 *
 * @param {Object} location 
 * @param {string} path 
 */
export function resolve(location, path) {
  if (!path.match(/^\//)) throw Error(`path must begin with '/': ${path}`)
  return lang(location) === "en" ? `/en${path}` : path
}
