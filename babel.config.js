module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  sourceType: 'unambiguous',
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": false,
        "helpers": true,
        "regenerator": true,
        "useESModules": false
      }
    ],
    ["@babel/plugin-proposal-class-properties"]
  ]
}