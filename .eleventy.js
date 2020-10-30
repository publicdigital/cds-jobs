module.exports = function(config) {
  config.addPassthroughCopy("css");
  config.addPassthroughCopy("assets");

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "./_posts",
      includes: "../_includes",
      output: "./_site",
    }
  }
};