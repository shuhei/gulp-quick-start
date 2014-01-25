var gulp = require('gulp');
var concat = require('gulp-concat');
var prefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var plumber = require('gulp-plumber');
 
gulp.task('css', function () {
  gulp.src('htdocs/css/**/*.css')
      .pipe(plumber())
      .pipe(prefixer('last 2 version'))
      .pipe(concat('style.min.css'))
      .pipe(minify())
      .pipe(gulp.dest('htdocs/dist/css'));
});
 
gulp.task('img', function () {
  gulp.src('htdocs/img/**/*')
      .pipe(plumber())
      .pipe(imagemin())
      .pipe(gulp.dest('htdocs/dist/img'));
});
 
gulp.task('watch', function () {
  gulp.watch('htdocs/css/**/*', ['css']);
  gulp.watch('htdocs/img/**/*', ['img']);
});
 
gulp.task('default', ['css', 'img']);