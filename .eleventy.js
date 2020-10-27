module.exports = function(config) {
  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "./_posts",
      includes: "../_includes",
      output: "./_site",
    }
  }
};