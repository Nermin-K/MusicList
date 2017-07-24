const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  context: resolve(__dirname, 'src'), //This is telling Webpack the base directory from which to resolve our entry points.
     /*entry: {
    'javascripts/build.js': './src/index.jsx',}*/
     entry: [
    'react-hot-loader/patch',
      'react-hot-loader/babel',
    'webpack-hot-middleware/client',
    './index.jsx',
  ],
   output: {
    //filename: '[name]', //since we only have one entry point, Webpack will see that as filename: 'javascripts/build.js'
    filename: 'build.js',
    //path: resolve(__dirname, 'public', 'javascripts'), //Our output file should live at /public/javascripts/build.js
     path: '/',
    publicPath: '/javascripts',
},
devServer: {
    hot: true,
    contentBase: resolve(__dirname, ''),
    publicPath: '/javascripts',
  },
   resolve: {
    extensions: ['.js', '.jsx'],
  },
   module: { /*we don’t want webpack wasting its time looking through files that aren’t JavaScript or JSX.
             With that done, all that’s left is to tell Webpack to use Babel to transpile the source before output*/
    rules: [ /*“look for .jsx files, ignore a couple of directories you might run into, 
            and otherwise when you find a JSX file, run Babel on it.*/
      {
        test: /.jsx?$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loader: 'babel-loader',
      },
    ],
  },
   plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
     new webpack.NoEmitOnErrorsPlugin(),
  ],
};