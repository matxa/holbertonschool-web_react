const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		header: './modules/header/header.js',
		body: './modules/body/body.js',
		footer: './modules/footer/footer.js',
	},
	plugins: [
    new HtmlWebpackPlugin({
      title: 'Task 3',
    }),
		new CleanWebpackPlugin()
  ],
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].bundle.js'
	},
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
    contentBase: './public',
    compress: true,
    port: 8564,
  },
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	module: {
    rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
							disable: true,
						},
					},
				],
			}
    ]
  }
}
