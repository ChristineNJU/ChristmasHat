const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');
let config = require('./webpack.config');
const port = 3333;

for (let key in config.entry) {
  if (config.entry.hasOwnProperty(key)) {
    config.entry[key] = [
      'webpack-dev-server/client?http://0.0.0.0:' + port,//资源服务器地址
      'webpack/hot/only-dev-server',
    ].concat(config.entry[key]);
  }
}

config.output.publicPath = 'http://0.0.0.0:' + port;

config.devtool = 'source-map';

config.devServer = {
  contentBase: path.resolve(__dirname, './dist'),
  historyApiFallback: false,
  disableHostCheck: true,
  hot: true,
  inline: true,
  host: '0.0.0.0',
  port: port,
  noInfo: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
  }
};

config.plugins = (config.plugins || []).concat([
  new webpack.HotModuleReplacementPlugin()
]);

new WebpackDevServer(webpack(config), config.devServer)
  .listen(port, '0.0.0.0', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:' + port);
    console.log('Opening your system browser...');
  });
