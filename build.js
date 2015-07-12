var fs = require('fs');
var mkdirp = require('mkdirp');
var rimraf = require('rimraf');
var _ = require('lodash');
var Handlebars = require('handlebars');

// Run this file to update the API files generated from our
// YUIDoc code comments.

const API_PATH = './api';
// The location that we write our files to
const API_DOCS_PATH = API_PATH + '/data';

// This is the the file that our code comments generate. It
// contains all of the data about Orbit's API
var orbitApi = require('./_data/orbitjs_api.json');
var classes = orbitApi.classes;

// Delete the directory, then recreate it
rimraf.sync(API_DOCS_PATH);
mkdirp.sync(API_DOCS_PATH);

// Precompile the template used for API pages
var templateString = fs.readFileSync(API_PATH + '/template.hbs', {encoding: 'utf8'});
var templateFn = Handlebars.compile(templateString);

// Loop through our objects, creating a file for each one.
_.each(orbitApi.classes, function(definition, name) {
  _.extend(definition, {name: name});
  var result = templateFn(definition);
  var filename = API_DOCS_PATH + '/' + name + '.md';
  fs.writeFileSync(filename, result);
});
