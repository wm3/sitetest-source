module.exports = {
  "parser": "babel-eslint",
  "extends": [ "standard", "standard-react" ],
  "globals": {
    // Gatsby で定義されたグローバル変数
    "graphql": false
  },
  "rules": {
    // propTypes を書いた方が嬉しい、という規模感にはならないと思われたので無効化
    "react/prop-types": [ "off" ]
  }
};
