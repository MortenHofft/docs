module.exports = function(eleventyConfig) {
  // Sort with `Array.sort`
  eleventyConfig.addCollection("myCustomData", function(collection) {
    return {test: 'hej med dig'};
  });
};

module.exports = function(eleventyConfig) {
  // Unsorted items (in whatever order they were added)
  eleventyConfig.addCollection("allSearchableContent", function(collection) {
		console.log(collection.getAll());
    return {test:}//;collection.getAll();
  });
};