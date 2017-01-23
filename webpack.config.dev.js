import path from 'path';
import webpack from 'webpack';

export default {
  devtools: 'eval-source-map',
  entry: [
  'webpack-hot-middleware/client',
  path.join(__dirname, '/client/index.js')
  ],
  output: {
    path: '/',
    publicPath: '/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),//handles error messages in cleaner way
    new webpack.optimize.OccurenceOrderPlugin(),//ensures consistent build hashes
    new webpack.HotModuleReplacementPlugin()//hot reloader
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
        path.join(__dirname, 'client'),
        path.join(__dirname, 'server/shared')
        ],
        loaders: [ 'react-hot', 'babel' ]//hot loader only works for function if it's NOT top component
      }
    ]
  },
  resolve: {
    extensions: [ '', '.js' ]
  }
}
