const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const shell = require('gulp-shell');

gulp.task('pack', function () {
	return gulp.src('./src/app.js')
		.pipe(webpackStream(require('./webpack.config.js'), webpack))
		.pipe(gulp.dest('./examples/dist/'));
})

gulp.task('compile', shell.task('npm run tsc'));

gulp.task('watch', ['compile', 'pack'], () => {
	gulp.watch(['./examples/app.js', './dist/recorder.js'], ['pack'])
	gulp.watch(['./src/recorder.ts'], ['compile'])
})

gulp.task('watch:example', ['pack'], () => {
	gulp.watch(['./examples/app.js', './dist/recorder.js'], ['pack'])
})

gulp.task('default', ['watch'])

gulp.task('build', ['compile', 'pack'])