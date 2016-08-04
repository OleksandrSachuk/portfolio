'use strict';
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  livereload = require('gulp-livereload'),
  connect = require('gulp-connect');
  // csscomb = require('gulp-csscomb');

gulp.task('css', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(autoprefixer({
    //   browsers: ['last 10 versions'],
    //   cascade: false
    // }))
    // .pipe(csscomb())
    .pipe(gulp.dest('css'))
    .pipe(connect.reload());
});
 
gulp.task('connect', function() {
  connect.server({
    root: ['./','css'],
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('index.html')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('js/**/*.js')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['css'])
  gulp.watch('index.html', ['html'])
  gulp.watch('js/**/*.js', ['js'])
});

// gulp.task( 'csscombsass', function( ){
//     return gulp.src('scss/**/*.scss')
//     .pipe(csscomb())
// } );

// gulp.task( 'csscombsass', function( ){
//     return gulp.src(['scss/**/*.scss'], {base: './'})
//     .pipe(csscomb())
//     .pipe(gulp.dest('./'));
// } );

gulp.task('default', ['html', 'css', 'connect', 'watch']);

// 'use strict';
// var gulp = require('gulp'),
// 	sass = require('gulp-sass'),
// 	autoprefixer = require('gulp-autoprefixer'),
// 	livereload = require('gulp-livereload'),
// 	connect = require('gulp-connect');

// gulp.task('css', function () {
//   return gulp.src('scss/**/*.scss')
//     .pipe(sass("style.css").on('error', sass.logError))
//     .pipe(autoprefixer({
// 			browsers: ['last 2 versions'],
// 			cascade: false
// 		}))
//     .pipe(gulp.dest('css'))
//     .pipe(connect.reload());
// });
 
// gulp.task('connect', function() {
//   connect.server({
//     root: ['./','css'],
//     livereload: true
//   });
// });

// gulp.task('html', function () {
//   gulp.src('index.html')
//     .pipe(connect.reload());
// });

// gulp.task('watch', function() {
// 	gulp.watch('scss/**/*.scss', ['css'])
// 	gulp.watch('index.html', ['html'])
// });

// gulp.task('default', ['html', 'css', 'connect', 'watch']);


