const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const del = require('del');

// Remove the built CSS file
gulp.task('clean-css', function(cb) {
  del('./css/style.css', cb);
});

// Compile our Stylus
gulp.task('stylus', function() {
  return gulp.src('./css/stylus/index.styl')
    .pipe($.stylus())
    .pipe($.rename('style.css'))
    .pipe(gulp.dest('./css'))
});

// Build the site
gulp.task('build', ['clean-css', 'stylus']);

// An alias of build
gulp.task('default', ['build']);