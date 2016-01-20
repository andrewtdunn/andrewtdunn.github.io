var gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create(),
eslint = require('gulp-eslint'),
jasmine = require('gulp-jasmine-phantom'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
ghPages = require('gulp-gh-pages');

//gulp.task('default', ['serve']);

gulp.task('default', ['copy-html', 'copy-images', 'copy-fonts', 'scripts', 'copy-sounds', 'styles','lint', 'scripts'], function(){
    browserSync.init({
        server: './dist'
    });

    gulp.watch('./src/style/sass/**/*.scss',['styles']);
    gulp.watch('./src/views/**/*css',['styles']);
    gulp.watch('./src/js/**/*.js',['lint']).on('change', browserSync.reload);
    gulp.watch('./src/**/*.html',['copy-html']).on('change', browserSync.reload);
    gulp.watch('./src//dist/index.html').on('change', browserSync.reload);
});

gulp.task('dist', [
    'copy-html',
    'copy-images',
    'styles',
    'lint',
    'scripts-dist',
    'copy-sounds',
    'copy-fonts'
]);

gulp.task('scripts', function(){
    gulp.src('src/js/**/*.js')
        //.pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js'));
    gulp.src('src/views/js/**/*.js')
        .pipe(gulp.dest('./dist/views/js'));
});

gulp.task('scripts-dist', function(){
    gulp.src('src/js/**/*.js')
        //pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
    gulp.src('src/views/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/views/js'));
});

gulp.task('copy-images', function(){
    gulp.src('src/img/**')
        .pipe(gulp.dest('dist/img'));
    gulp.src('src/tile-sets/starTrekCharacters/*')
        .pipe(gulp.dest('dist/img/starTrekCharacters'));
    gulp.src('src/views/images/*')
        .pipe(gulp.dest('dist/views/images'));

});

gulp.task('copy-html', function(){
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'));
    gulp.src('./src/views/*.html')
        .pipe(gulp.dest('./dist/views'));
});

gulp.task('copy-sounds', function(){
    gulp.src('src/sounds/*')
        .pipe(gulp.dest('./dist/sounds'));
});

gulp.task('copy-fonts', function(){
    gulp.src('src/style/fonts/**')
        .pipe(gulp.dest('./dist/style/fonts'));
});


gulp.task('styles',  function() {
    console.log('executing styles');
    gulp.src('src/views/css/**/*.css')
        .pipe(gulp.dest('./dist/views/css'));
    gulp.src('./src/style/sass/**/*.scss')
        .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./dist/style/css'))
        .pipe(browserSync.stream());
});

gulp.task('lint', function(){
    return gulp.src(['./src/js/**/*.js','./src/views/js/**/*.js'])
    // eslint() attahes the lint output to the eslint property
    // of the file object so it can be used by other modules
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exist with an error code (1) on
    // lint error, return the steream and pipe to failOnError last.
    .pipe(eslint.failOnError());
});

gulp.task('tests', function(){
    gulp.src('src/tests/spec/extra/Spec.js')
        .pipe(jasmine({
            integration: true,
            vendor: 'js/**/*.js'
        }));
});

gulp.task('deploy', function(){
   return gulp.src('./dist/**/*')
        .pipe(ghPages({
                branch: "master"
        }));
});