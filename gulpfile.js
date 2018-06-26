const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

gulp.task('pack', function () {
	return gulp.src('./src/app.js')
		.pipe(webpackStream(require('./webpack.config.js'), webpack))
		.pipe(gulp.dest('./dist/'));
})

gulp.task('compile', function () {
	return gulp.src('./src/recorder.js')
		.pipe(webpackStream(require('./webpack.recorder.config.js'), webpack))
		.pipe(gulp.dest('./dist/'));
})

gulp.task('watch', ['pack'], () => {
	gulp.watch(['./app.js','./dist/recorder.min.js'], ['pack'])
	gulp.watch(['./src/recorder.js'], ['compile'])
})

gulp.task('default', ['watch'])