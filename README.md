# React starter setup

A react starter setup powered by gulp and browserify along with a test suit using [Chai](http://chaijs.com/) and [Mocha](http://mochajs.org/).

## Install

Make sure you have the following installed
- [node](https://github.com/nodejs/node/wiki)
- [gulp](http://gulpjs.com/) (globally installed). A local copy will be installed when running `npm install`

Run `#npm install`

This will get all the dependencies needed to run this starter setup

## Dependencies

A full list of dependencies are listed below and can also be found in [package.json](https://github.com/chrisj-skinner/gulp-bootstrap-less-browserify-babel-browsersync/blob/sass-version/package.json).

- [gulp](http://gulpjs.com/)
- [browserify](http://browserify.org/)
- [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
- [browser-sync](https://www.npmjs.com/package/browser-sync)
- [gulp-babel](https://www.npmjs.com/package/gulp-babel)
- [gulp-concat](https://www.npmjs.com/package/gulp-concat)
- [del](https://www.npmjs.com/package/del)
- [vinyl-source-stream](https://www.npmjs.com/package/vinyl-source-stream)
- [vinyl-buffer](https://www.npmjs.com/package/vinyl-buffer)

## Commands / Builds


### To set up the structure
`#gulp setup`  
This will pull all related files into the correct directories.


### Setup a development environment:
`#gulp dev`  
This will complile all less and js files, start a local server and then listen for changes on the following files types:

| File Type     | Action        																 |
| ------------- | -------------------------------------------------------------------------------|
| html          | refresh the browser 															 |
| js            | re-complile, browserify, babelify, concat, minify and then refresh the browser |
| sass          | re-complile, concat, minify and then refresh the browser						 |

### Build for distribution
`#gulp build`  
A distribution folder (dist/) will be created in the working directory ready deployment.

The will include the following file structure with minified css, js files along with .map files for each.

	dist/
		css/
		fonts/
		js/
		index.html


For more information about what each task does - view the [gulpfile.babel.js](https://github.com/chrisj-skinner/gulp-bootstrap-less-browserify-babel-browsersync/blob/sass-version/gulpfile.babel.js)

## Future plans / ideas

Add some kind of image minification / optimization when the `dist/` dir gets created. Also a JS lint package would be a nice touch. For now though, enjoy / share and please log any issues (see contributing).

## Contributing

Pull requests are the way to go here. I apologise in advance for the slow action on pull requests and issues. Please match the naming convention and be as explicit as possible. That last one is important.

## Copyright and License

Code released under the [MIT](https://github.com/chrisj-skinner/gulp-bootstrap-less-browserify-babel-browsersync/blob/sass-version/LICENSE) license.
