/** @type {import('next').NextConfig} */
const {ESBuildMinifyPlugin} = require('esbuild-loader')

module.exports = {
  reactStrictMode: true,
  webpack: (config, {webpack}) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react',
      })
    )
    config.optimization.minimizer.push(
      new ESBuildMinifyPlugin({
        target: 'es2015',
        css: true,
      })
    )
    config.module.rules.push({
      test: /\.tsx?$/,
      loader: 'esbuild-loader',
      options: {
        loader: 'tsx',
        target: 'es2015',
        tsconfigRaw: require('./tsconfig.json'),
      },
    })
    return config
  },
}
