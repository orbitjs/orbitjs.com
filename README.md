# orbitjs.com

The website for [Orbit.js](https://github.com/orbitjs/orbit.js).

### Dependencies

- [Node v0.12](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Jekyll](http://jekyllrb.com/)

### Installation

Clone this repository into a sibling directory of the `orbit.js` repo. Your paths
should look like the following:

```
orbit/
  orbit.js
  orbitjs.com
```

*Note: the name of the containing directory doesn't matter.*

Run `npm install` after cloning the repository.

### Generating the API documentation

The API documentation, which is contained in the Orbit.js source as YUIDoc code comments,
is required to run the website. To generate the docs, do the following:

1. Be sure that you're at the desired commit in the Orbit.js repo
2. Run `gulp docs` from the command line

That's it!

### Building the Site

Build the site by running `gulp`. This compiles the Sass and generates the individual API docs pages.

This must be done in the following situations:

1. The first time you pull down the repo
2. Anytime you make a change to the Stylus or API template file.

### Running the Site

Run `jekyll serve` from the command line. The site should now be live at
[http://127.0.0.1:4000/orbitjs.com/](http://127.0.0.1:4000/orbitjs.com/).

### Setting up Watch

If you wish to use Watch while developing, open a new terminal and run `gulp work`. The Stylus
will now rebuild automatically as you make changes.

Due to the way Jekyll updates files in the `_site` directory, I was unable to configure it to automatically
refresh the page. If you've had experience setting this up, do submit a PR!