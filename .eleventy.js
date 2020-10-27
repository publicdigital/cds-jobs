module.exports = function(config) {
  config.addPassthroughCopy("css");

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "./_posts",
      includes: "../_includes",
      output: "./_site",
    }
  }
};