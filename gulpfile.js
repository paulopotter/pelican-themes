var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat');

gulp.task('styles', function(){
return gulp.src('minimal-dev/static/scss/*.scss')
    .pipe(sass()) 
    .pipe(gulp.dest('minimal-dev/static/css/'))
    .pipe(concat("style.css"))
    .pipe(minifyCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('minimal-dev/static/css/'))
});

gulp.task('watch', function() {
  gulp.watch('minimal-dev/static/scss/*.scss', ['styles']);
});