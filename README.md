# metalsmith-jekyll-frontmatter

This is a plugin for [Metalsmith](http://metalsmith.io/) that allows adding front
matter to each static files that will be serve/regenerate by Jekyll.

## Usage

This plugin matches files using the [minimatch pattern][minimatch] and and add
Jekyll front matter to the content of any matched files.

If using the CLI for Metalsmith, metalsmith-jekyll-frontmatter can be used like any
other plugin by including it in `metalsmith.json`. For example:

```json
{
  "plugins": {
    "metalsmith-jekyll-frontmatter": {
    	pattern: "**/**"
    }
  }
}
```

For Metalscript's JavaScript API, metalsmith-jekyll-frontmatter can be used like any
other plugin, by attaching it to the function invocation chain on the
Metalscript object. For example:

```js
var jekyllFrontMatter = require('metalsmith-jekyll-frontmatter');
require('metalsmith')(__dirname)
  .use(jekyllFrontMatter({
  	pattern: "**/**"
  })
  .build();
```

## License

MIT, see [LICENSE](LICENSE).

[minimatch]: https://github.com/isaacs/minimatch