module.exports = {
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            cleanupIDs: false,
          },
        },
      },
      'removeXMLNS',
    ],
  },
}
