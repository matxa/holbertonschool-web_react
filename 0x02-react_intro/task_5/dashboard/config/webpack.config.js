const path = require('path');

module.exports = {
	entry: path.resolve(process.cwd(), 'src/index.js'),
	output: {
		path: path.resolve(process.cwd(), 'dist'),
		filename: 'bundle.js',
	},
	mode: 'development',
  devServer: {
    hot: true,
		historyApiFallback: {
      index: '/dist/'
    }
  },
  devtool: "inline-source-map",
  module: {
    rules: [
			{
				test: /\.css$/, use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true, // webpack@1.x
							disable: true, // webpack@2.x and newer
						},
					},
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/react']
					}
				}
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/react']
					}
				}
			},
    ]
  }
}
