var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');

gulp.task('clean', function () {
  del(['./build/*']);
});

gulp.task('copy', function () {
  gulp.src('./client/**/*.html')
    .pipe(gulp.dest('build'));
  gulp.src('./client/img/*')
    .pipe(gulp.dest('build/img'));
  gulp.src('./bower_components/slick-carousel/slick/fonts/*')
      .pipe(gulp.dest('./build/fonts'));
  return gulp.src('./bower_components/slick-carousel/slick/ajax-loader.gif')
      .pipe(gulp.dest('./build'));  
});

gulp.task('sass', function () {
  return  gulp.src(['./client/scss/**/*.scss'])
              .pipe(sass({
                includePaths : ['bower_components', 'node_modules'],
                errLogToConsole: true
              }))
              .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
              }))
              .pipe(gulp.dest('./build/css'));
});

gulp.task('server', ['copy', 'sass'], function (callback) {
  var myConfig = require('./webpack.config');
  var webpackCompiler = webpack(myConfig, function(err, stats) {
  });

  new WebpackDevServer(webpackCompiler, {
    contentBase: './build',
    hot: true,
    debug: true
  }).listen(8000, 'localhost', function (err, result) {
    
  });
});

gulp.task('watch', function () {
  gulp.watch(['./client/**/*{scss,sass}'], ['sass']);
  gulp.watch(['./client/**/*.html'], ['copy']);
});

gulp.task('default', ['watch', 'server'], function () {


});
