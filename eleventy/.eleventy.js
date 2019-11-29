const babel = require("@babel/core");
const pluginTOC = require('eleventy-plugin-toc')
const markdownIt = require("markdown-it");
let markdownItAnchor = require("markdown-it-anchor");
let markdownItToc = require("markdown-it-table-of-contents");

module.exports = function (eleventyConfig) {

  // pass some assets right through
  eleventyConfig.addPassthroughCopy("./src/site/images");

  //add toc to items
  eleventyConfig.addPlugin(pluginTOC)

  // transpile and compress js
  eleventyConfig.addFilter("jsmin", function (input) {
    const { code, map } = babel.transform(input, {
      babelrc: false,
      configFile: true,
    });
    return code;
  });

  // custom collections
  eleventyConfig.addCollection("navCollection", function (collection) {
    let navCollection = collection.getFilteredByTag("nav");
    // console.log(navCollection);
    return navCollection;
  });

  //filters
  eleventyConfig.addNunjucksFilter("startsWith", function (str, start) {
    return str.startsWith(start);
  });

  /* Markdown */
  let md = new markdownIt();

  function removeExtraText(s) {
    let newStr = String(s).replace(/New\ in\ v\d+\.\d+\.\d+/, "");
    newStr = newStr.replace(/⚠️/g, "");
    newStr = newStr.replace(/[?!]/g, "");
    newStr = newStr.replace(/<[^>]*>/g, "");
    return newStr;
  }

  function markdownItSlugify(s) {
    return encodeURIComponent(removeExtraText(s).trim().toLowerCase().replace(/\s+/g, '-'));
  }

  eleventyConfig.setLibrary("md", markdownIt({
    html: true,
    breaks: true,
    linkify: true
  })
    .use(markdownItAnchor, {
      permalink: false,
      slugify: markdownItSlugify,
      permalinkBefore: false,
      permalinkClass: "direct-link",
      permalinkSymbol: "#",
      level: [1, 2, 3, 4]
    })
    .use(markdownItToc, {
      includeLevel: [2, 3],
      slugify: markdownItSlugify,
      format: function (heading) {
        return removeExtraText(heading);
      },
      transformLink: function (link) {
        // remove backticks from markdown code
        return link.replace(/\%60/g, "");
      }
    })
  );

  return {
    dir: {
      input: "src/site",
      output: "dist"
    },
    templateFormats: ["njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};