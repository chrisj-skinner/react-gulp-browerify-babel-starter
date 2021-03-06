import gulp from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import maps from 'gulp-sourcemaps';
import del from 'del';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

browserSync.create();

// By Default this will be set to ''
// Change this if your file structure is deeper than root level (i.e 'this-repo/app/css' rather than 'this-repo/css')
const rootDir = '';

// Compile SASS files from /scss into /css
gulp.task('sass', function() {
    gulp.src(rootDir + 'sass/main.scss')
        .pipe(maps.init())
        .pipe(sass())
        .pipe(maps.write('./'))
        .pipe(gulp.dest(rootDir + 'css'));
});

// Minify compiled CSS
gulp.task('minify-css', ['sass'], function() {
    return gulp.src(rootDir + 'css/main.css')
        .pipe(maps.init())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename('main.min.css'))
        .pipe(maps.write('./'))
        .pipe(gulp.dest(rootDir + 'css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Concat Browserify SourceMap JS
gulp.task('concat-js', function() {
   process.env.NODE_ENV = 'production';
   return browserify(rootDir + 'js/app.js')
      .transform('babelify')
      .bundle()
      .pipe(source('main.js'))
      .pipe(buffer())
      .pipe(maps.init()) // create sourcemap
      .pipe(maps.write('./')) // write sourcemap
      .pipe(gulp.dest(rootDir + 'js'))
      .pipe(browserSync.reload({
          stream: true // Reload Browser
      }));
});

// Minify JS
gulp.task('minify-js', ['concat-js'], function() {
   gulp.src(rootDir + 'js/main.js')
      .pipe(maps.init())
      .pipe(uglify())
      .pipe(rename('main.min.js'))
      .pipe(maps.write('./'))
      .pipe(gulp.dest(rootDir + 'js'));
});

// Copy vendor libraries from /node_modules into /vendor
gulp.task('copy', function() {
    return gulp.src([
        'node_modules/font-awesome/**',
        ])
    .pipe(gulp.dest('vendor/font-awesome'));
});

// Copy fonts over
gulp.task('fonts', ['copy'], function(){
    return gulp.src([
        'vendor/font-awesome/fonts/**'
        ])
    .pipe(gulp.dest(rootDir + 'fonts'));
});

// Clean up task
gulp.task('clean', function(){
    del(['dist']);
});

// Create dist folder
gulp.task('dist', ['clean'], function() {
    return gulp.src([
        'css/*.min.*',
        'js/*.min.js*',
        'fonts/*',
        'index.html',
        'img/**'],
        { base: './' })
    .pipe(gulp.dest(rootDir + 'dist'));
});

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: rootDir
        },
     });
});

// NOTE: First run everything to get setup
gulp.task('setup', ['fonts']);

// Dev task with browserSync and watch
gulp.task('dev', ['browserSync', 'minify-css', 'minify-js'], function() {
    // Watch file changes
    gulp.watch('sass/*.scss', ['minify-css']);
    gulp.watch(['js/*/*.js', '!js/*.min.js'], ['minify-js'] );
    // Reloads the browser on file change
    gulp.watch('*.html', browserSync.reload);
});

// Default build task with dist creation
gulp.task('default', ['dist']);
