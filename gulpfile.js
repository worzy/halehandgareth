'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
  	.pipe(sass({ includePaths: ['./node_modules/foundation-sites/scss']}))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('default', [ 'sass' ]);