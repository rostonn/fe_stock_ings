var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');

gulp.task('scss-lint', function() {
  return gulp.src('./scss/*.scss')
    .pipe(scsslint());
});

gulp.task('test', function(){
  console.log('Hello World');
  return;
})

gulp.task('autoprefixer', function () {
  return gulp.src('./scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dest'));
});
