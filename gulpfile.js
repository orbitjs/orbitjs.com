const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const del = require('del');

// Remove the built CSS file
gulp.task('clean-css', function(cb) {
  del('./css/style.css', cb);
});

// Remove the existing API docs file
gulp.task('clean-api-docs', function(cb) {
  del('./_data/orbitjs_api.json', cb);
});

// Compile our Stylus
gulp.task('stylus', function() {
  return gulp.src('./css/stylus/index.styl')
    .pipe($.stylus())
    .pipe($.rename('style.css'))
    .pipe(gulp.dest('./css'))
});

// Generate the API docs from the source library. For this
// to work, the main orbit repo must be in a sibling directory
// to this repository.
gulp.task('generate-api-docs', function() {
  return gulp.src('../orbit.js/lib/**/*.js')
    .pipe($.yuidoc.parser())
    .pipe($.rename('orbitjs_api.json'))
    .pipe(gulp.dest('./_data'));
});

// Build the site
gulp.task('build', ['clean-css', 'stylus']);

// Get the API docs in order
gulp.task('docs', ['clean-api-docs', 'generate-docs']);

// An alias of build
gulp.task('default', ['build']);