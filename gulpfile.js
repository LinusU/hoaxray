
var nib = require('nib');
var gulp = require('gulp');

var ejs = require('gulp-ejs');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');

var paths = {
  assets: ['assets/*'],
  css: ['vendor/*.styl', 'site/*.styl'],
  html: ['site/*.ejs'],
  out: 'build/'
};

gulp.task('css', function () {
  return gulp.src(paths.css)
    .pipe(concat('hoaxray.styl'))
    .pipe(stylus({
      use: nib(),
      import: ['nib']
    }))
    .pipe(gulp.dest(paths.out));
});

gulp.task('html', function () {
  return gulp.src(paths.html)
    .pipe(ejs())
    .pipe(gulp.dest(paths.out));
});

gulp.task('assets', function () {
  return gulp.src(paths.assets)
    .pipe(gulp.dest(paths.out));
});

gulp.task('server', ['default'], function () {
  var express = require('express');
  var app = express();
  app.use(express.static(__dirname + '/build'));
  app.listen(5680);
  console.log('http://localhost:5680/');
});

gulp.task('default', ['css', 'html', 'assets'], function() {
  gulp.watch(paths.css, ['css']);
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.assets, ['assets']);
});
