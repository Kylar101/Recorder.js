const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

	gulp.task('pack', function() {
	  return gulp.src('./src/app.js')
	    .pipe(webpackStream(require('./webpack.config.js'), webpack))
	    .pipe(gulp.dest('./dist/'));
	})

	gulp.task('watch', ['pack'], ()=>{
		gulp.watch(['*.js'], ['pack'])
	})

	gulp.task('default', ['watch'])