var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');

gulp.task('scss-lint', function() {
  return gulp.src('./scss/*.scss')
    .pipe(scsslint());
});

gulp.task('test', function(){
  console.log('Hello World');
  return;
})
