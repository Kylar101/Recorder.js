const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const uglify = require('gulp-rename');
const rename = require('gulp-rename');
const pump = require('pump');

gulp.task('pack', function () {
	return gulp.src('./src/app.js')
		.pipe(webpackStream(require('./webpack.config.js'), webpack))
		.pipe(gulp.dest('./examples/dist/'));
})

gulp.task('compile', function () {
	return gulp.src('./src/recorder.js')
		// .pipe(webpackStream(require('./webpack.recorder.config.js'), webpack))
		// .pipe(rename('recorder.min.js'))
		.pipe(gulp.dest('./dist/'));
})

// gulp.task('compile', function (cb) {
//   pump([
//         gulp.src('./src/recorder.js'),
//         uglify(),
//         gulp.dest('dist')
//     ],
//     cb
//   );
// });

gulp.task('watch', ['compile','pack'], () => {
	gulp.watch(['./examples/app.js','./dist/recorder.min.js'], ['pack'])
	gulp.watch(['./src/recorder.js'], ['compile'])
})

gulp.task('watch:example', ['pack'], () => {
	gulp.watch(['./examples/app.js','./dist/recorder.js'], ['pack'])
})

gulp.task('default', ['watch'])