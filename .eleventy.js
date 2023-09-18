module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/img')
  eleventyConfig.addCollection("sections", function (collectionApi) {
    return collectionApi.getAll()
      .filter((a) => a.data.tags.includes('sections'))
      .sort((a, b) => a.data.order - b.data.order);
  })

  return {
    dir: { input: 'src', output: '_site' }
  };
};