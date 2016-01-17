var gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
watch = require('gulp-watch');

gulp.task('default', function(){
    gulp.watch('./style/sass/*.scss',['styles']);
});


gulp.task('styles', function() {
    console.log("executing styles");
    gulp.src('./style/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./style/css'));
});