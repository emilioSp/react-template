const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const optimization =
    argv.mode === 'production'
      ? {
          minimize: true,
          minimizer: [
            // `...` is the webpack@5 syntax to extend existing minimizers (i.e. `terser-webpack-plugin`)
            `...`,
            new TerserPlugin(),
          ],
        }
      : {};

  const performance = {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  };

  let config = [
    {
      entry: './src/index.js',
      mode: argv.mode,
      devtool: argv.mode === 'production' ? false : 'eval-source-map',
      output: {
        path: __dirname + '/public',
        filename: 'index-bundle.[contenthash].js',
        publicPath: '/',
      },
      devServer: {
        static: {
          directory: path.join(__dirname, '/'),
        },
        compress: true,
        port: 9000,
        historyApiFallback: true,
      },
      module: {
        rules: [
          { test: /\.(m)?js$/, use: ['babel-loader'], exclude: /node_modules/ },
          {
            test: /\.(woff(2)?|ico|png|jpg|jpeg|svg|ttf)$/i,
            type: 'asset',
            generator: { filename: '[name].[contenthash][ext]' },
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.ttf$/,
            type: 'asset/resource',
          },
        ],
      },
      optimization,
      performance,
      plugins: [
        new HtmlWebpackPlugin({
          template: __dirname + '/html/index.html',
          filename: 'index.html',
        }),
        // Extracts CSS into separate files
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
      ],
    },
  ];

  return config;
};
