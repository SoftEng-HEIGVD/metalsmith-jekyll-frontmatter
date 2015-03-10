"use strict";

var match = require('minimatch');
var debug = require('debug')('metalsmith-jekyll-frontmatter');

module.exports = function(opts) {

	var pattern = opts.pattern;

	return function(files, metalsmith, done) {

		// for each file
		Object.keys(files).forEach(function(filename) {
			var file = files[filename];

			// if the file matches the pattern
			if (match(filename, pattern)) {
				debug('Adding Jekyll front matter to "%s"...', filename);

				var contents = file.contents.toString();

				file.contents = new Buffer("---\n---\n" + contents);
			}
		});

		done();
	};
};
