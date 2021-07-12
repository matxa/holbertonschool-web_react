const path = require('path');

module.exports = {
	entry: path.resolve(process.cwd(), 'src/index.js'),
	output: {
		path: path.resolve(process.cwd(), 'dist'),
		filename: 'bundle.js'
	},
	mode: 'production',
  devServer: {
    hot: true,
    devtool: "inline-source-map"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
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
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ],
  }
}
