'use strict';

var path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: './examples/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '/example/dist/')
	},
	module: {
		rules: [{
			test: /\.(sass|scss|css)$/,
			// use: ExtractTextPlugin.extract({ 
			use: [{
					loader: 'css-loader',
					options: {
						url: false
					}
				},
				'sass-loader'
			]
			// }) 
		}, ]
	}
};