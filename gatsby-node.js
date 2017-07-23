const axios = require('axios')
const crypto = require('crypto')


// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    createPage(Object.assign({}, page, {
      context: Object.assign({}, page.context)
    }))

    createPage(Object.assign({}, page, {
      path: `/en${page.path}`,
      context: Object.assign({}, page.context)
    }))

    resolve()
  })
}

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators

  const res = await axios.get('https://sessionize.com/api/v2/w6fe60ai/view/all')

  createNode({
    id: "timetable",
    children: [],
    parent: `__SOURCE__`,
    // Reserved for plugins who wish to extend other nodes.
    //fields: Object,
    internal: {
      contentDigest: crypto.createHash('md5').update(JSON.stringify(res.data)).digest('hex'),
    //  // Optional media type (https://en.wikipedia.org/wiki/Media_type) to indicate
    //  // to transformer plugins this node has data they can futher process.
    //  mediaType: String,
    //  // A globally unique node type choosen by the plugin owner.
      type: "Timetable",
    //  // The plugin which created this node.
    //  owner: String,
    //  // Stores which plugins created which fields.
    //  fieldOwners: Object,
    //  // Optional field exposing the raw content for this node
    //  // that transformer plugins can take and further process.
    //  content: String,
    },
    sessions: res.data.sessions
  });

  return
}
