'use strict';

var path = require('path');
const webpack = require('webpack');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/recorder.js',
  output: {
    filename: 'recorder.min.js',
    path: path.resolve(__dirname, './')
  },
  module: {
  	rules: []
	},
	plugins: [
		new UglifyjsPlugin()
	]
};