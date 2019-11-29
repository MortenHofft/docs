module.exports = ({
  plugins: [
		require('precss'),
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-color-mix'),
    require('cssnano')({
      preset: 'default'
    })
  ]
})