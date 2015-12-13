var gulp = require('gulp'),
    sass = require('gulp-sass');

var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');

gulp.task('styles', function(){
return gulp.src('minimal-dev/static/scss/*.scss')
    .pipe(sass()) 
    .pipe(gulp.dest('minimal-dev/static/css/'))
    .pipe(minifyCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('minimal-dev/static/css/'))
});

gulp.task('watch', function(){
  gulp.watch('minimal-dev/static/**/*.scss', ['styles']); 
})