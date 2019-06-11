module.exports = {
  content: ['public/index.html'],
  css: ['public/styles.css'],
  extractors: [
    {
      extractor: {
        extract: content => content.match(/[A-z0-9-:\/]+/g)
      },
      extensions: ['html']
    }
  ]
};
