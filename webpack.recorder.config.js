'use strict';

var path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: './src/recorder.js',
  output: {
    filename: 'recorder.min.js',
    path: path.resolve(__dirname, './')
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
  	},
  	]
  }
};