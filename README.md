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

| DevDependencies     			| Version |
| ------------- -------------	| --------|
| babel-core 						| 6.23.1 |
| babel-preset-es2015 			| 6.22.0 |
| babel-preset-react 			| 6.23.0 |
| babelify 							| 7.3.0 |
| bootstrap 						| 3.3.7 |
| browser-sync 					| 2.13.0 |
| browserify 						| 14.0.0 |
| chai 								| 3.5.0 |
| del 								| 2.2.2 |
| eslint 							| 3.17.1 |
| eslint-plugin-react 			| 6.10.3 |
| gulp 								| 3.9.1 |
| gulp-babel 						| 6.1.2 |
| gulp-clean-css 					| 2.0.10 |
| gulp-rename 						| 1.2.2 |
| gulp-sass 						| 3.1.0 |
| gulp-sourcemaps 				| 2.4.1 |
| gulp-uglify 						| 1.5.4 |
| jquery 							| 1.11.3 |
| mocha 								| 3.2.0 |
| react 								| 15.4.2 |
| react-dom 						| 15.4.2 |
| vinyl-buffer 					| 1.0.0 |
| vinyl-source-stream			| 1.1.0 |

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

## Contributing

Pull requests are the way to go here. I apologise in advance for the slow action on pull requests and issues. Please match the naming convention and be as explicit as possible. That last one is important.

## Copyright and License

Code released under the [MIT](https://github.com/chrisj-skinner/gulp-bootstrap-less-browserify-babel-browsersync/blob/sass-version/LICENSE) license.
