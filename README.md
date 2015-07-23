# orbitjs.com

The website for Orbit.js

### Installation

Clone this repository into a sibling directory of the `orbit.js` repo. Your paths
should look like so:

```
- orbit
  - orbit.js
  - orbitjs.com
```

*Note: the name of the containing directory doesn't matter.*

Run `npm install` after cloning the repository.

### Generating the API documentation

The API documentation, which is contained in the Orbit.js source as YUIDoc code comments,
is required to run the website. To generate the docs, do the following:

1. Be sure that you're at the right commit in the Orbit.js repo
2. Run `gulp docs` from the command line.

That's it!

### Building the Site

Build the site by running `gulp`. This compiles the Sass and generates the individual API docs pages.

You must do this:

1. The first time you pull down the repo
2. Anytime you make a change to the Stylus or API template file.

### Running the Site

Run `jekyll serve` from the command line. The site should now be live at
[http://127.0.0.1:4000/orbitjs.com/](http://127.0.0.1:4000/orbitjs.com/).