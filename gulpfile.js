const gulp = require('gulp');
const loadPlugins = require('gulp-load-plugins');
const del = require('del');
const _ = require('lodash');

// Load the Gulp plugins under $
const $ = loadPlugins({
  rename: {
    'gulp-json-transform': 'transformJson'
  }
});

// Remove the built CSS file
gulp.task('clean-css', function(cb) {
  del('./css/style.css', cb);
});

// Remove the existing API docs file
gulp.task('clean-api-docs', function(cb) {
  del('./_data/orbitjs_api.json', cb);
});

// Remove the generated API docs file
gulp.task('clean-generated-api', function(cb) {
  del('./_data/api_data.json')
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
gulp.task('fetch-api-docs', function() {
  return gulp.src('../orbit.js/lib/**/*.js')
    .pipe($.yuidoc.parser())
    .pipe($.rename('orbitjs_api.json'))
    .pipe(gulp.dest('./_data'));
});

// After the API docs have been fetched, they need to be transformed
// for our templates to render the proper HTML
gulp.task('transform-api-docs', ['fetch-api-docs'], function() {

  // Determine whether a YUIDoc "class" definition is a namespace or not
  var filter = function(definition) {
    return definition.namespace;
  };

  return gulp.src('./_data/orbitjs_api.json')
    .pipe($.transformJson(function(data) {
      var classes = data.classes;

      // Find the namespaces
      var namespaces = _.reject(classes, filter);

      // Create an object of namespaces with the classes
      // nested within them.
      return _.chain(classes)
        .filter(filter)
        .groupBy('namespace')
        .mapValues(function(group, name) {
          
          // Locate the correct namespace given the name of the group
          var namespace = _.findWhere(namespaces, {name: name});

          // Extend that namespace with the group
          return _.extend(namespace, {
            classes: _.sortBy(group, 'name')
          });
        })
        .value();
    }))
    .pipe($.rename('api_data.json'))
    .pipe(gulp.dest('./_data'));
});

// Build the site
gulp.task('build', ['clean-css', 'stylus']);

// Get the API docs in order
gulp.task('docs', ['clean-api-docs', 'clean-generated-api', 'transform-api-docs']);

// An alias of build
gulp.task('default', ['build']);