const presets = [
  [
    "@babel/preset-env",
    {
      "useBuiltIns": "entry",
      "corejs": { "version": 3, "proposals": true },
    }
  ],
  "minify"
];

module.exports = { 
  presets, 
  "comments": false 
};