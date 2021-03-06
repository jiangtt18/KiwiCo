const path = require('path');

module.exports = {
	context: __dirname,
	entry: './lib/kiwi.js',
	output: {
		path: path.resolve(__dirname),
		filename: './lib/bundle.js'
	},
	module: {
		loaders: [
			{
				test: [/\.jsx?$/, /\.js?$/],
				exclude: /(node_modules)/,
				loader: 'babel-loader',
			}
		]
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx', '*']
	}
};
