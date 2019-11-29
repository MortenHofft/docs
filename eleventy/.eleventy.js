const UglifyJS = require("uglify-js");
const babel = require("@babel/core");

module.exports = function(config) {

  // pass some assets right through
  config.addPassthroughCopy("./src/site/images");

  // transpile and compress js
  config.addFilter("jsmin", function(input) {
    const { code, map } = babel.transform(input, {
        babelrc: false,
        configFile: true,
    });
    return code;
  });
  
  return {
    dir: {
      input: "src/site",
      output: "dist"
    },
    templateFormats : ["njk", "md", "11ty.js"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
    passthroughFileCopy: true
  };
};