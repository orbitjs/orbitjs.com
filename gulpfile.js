const fs = require('fs');
const del = require('del');
const _ = require('lodash');
const gulp = require('gulp');
const mkdirp = require('mkdirp');
const Handlebars = require('handlebars');
const loadPlugins = require('gulp-load-plugins');
const execSync = require('child_process').execSync;

// Load the Gulp plugins under $
const $ = loadPlugins({
  rename: {
    'gulp-json-transform': 'transformJson'
  }
});

// Get the commit that we're building the docs from
var sha = execSync('cd ../orbit.js && git rev-parse HEAD', {encoding: 'utf8'});
sha = sha.replace(/\s$/, '');

// Takes the relative path generated by YUIDoc and makes it absolute
const githubUrl = 'http://github.com/orbitjs/orbit.js/blob/' + sha + '/';
const repoName = 'orbit.js';

function relativeFilePath(url) {
  var lastIndex = url.lastIndexOf(repoName);
  return url.slice(lastIndex + repoName.length + 1);
}

function fixUrl(url) {
  return githubUrl + relativeFilePath(url);
}

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

// Remove the generated API html files
gulp.task('clean-generated-templates', function(cb) {
  del('./api/data/*');
});

// Compile our API documentation files from the
// data file generated by YUIDoc
gulp.task('generate-api-pages', function(cb) {
  mkdirp.sync('./api/data');
  var orbitApi = require('./_data/orbitjs_api.json');

  var classItems = _.chain(orbitApi.classitems)
    .filter('itemtype')
    .map(function(ci) {
      ci.relativePath = relativeFilePath(ci.file);
      ci.file = fixUrl(ci.file);
      return ci;
    })
    .groupBy('class')
    .value();

  var classes = _.map(orbitApi.classes, function(c) {
    var cItems = classItems[c.name];
    c.relativePath = relativeFilePath(c.file);
    c.file = fixUrl(c.file);
    c.methods = _.filter(cItems, {itemtype: 'method'});
    c.properties = _.filter(cItems, {itemtype: 'property'});
    c.events = _.filter(cItems, {itemtype: 'event'});
    c.apiCount = c.methods.length + c.properties.length + c.events.length;
    return c;
  });

  // Precompile the template used for API pages
  var templateString = fs.readFileSync('./api/template.hbs', {encoding: 'utf8'});
  var templateFn = Handlebars.compile(templateString);

  // Loop through our objects, creating a file for each one.
  _.each(orbitApi.classes, function(definition, name) {
    _.extend(definition, {name: name});
    var result = templateFn(definition);
    var filename = './api/data/' + name + '.md';
    fs.writeFileSync(filename, result);
  });

  cb();
});

// Compile Stylus
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
      // Update all URLs to be relative to Github.com, and not your local directory
      var classes = _.map(data.classes, function(c) {
        c.file = fixUrl(c.file);
        return c;
      });

      // Find the namespaces
      var namespaces = _.reject(classes, filter);

      // Group the classitems by their associated Class
      var classItems = _.groupBy(data.classitems, 'class');

      // Create an object of namespaces with the classes
      // nested within them.
      return _.chain(classes)
        // Remove namespaces
        .filter(filter)
        // Attach the classItems to the Class
        .map(function(c) {
          c.classItems = classItems[c.name];
          return c;
        })
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
gulp.task('build', ['clean-css', 'stylus', 'generate-api-pages']);

// Get the API docs in order
gulp.task('docs', ['clean-api-docs', 'clean-generated-api', 'transform-api-docs']);

// An alias of build
gulp.task('default', ['build']);