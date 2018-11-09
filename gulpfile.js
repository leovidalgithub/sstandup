'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let uglifycss = require('gulp-uglifycss');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});
