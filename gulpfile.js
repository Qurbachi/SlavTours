const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style() {
    //1.Find the scss files
    return gulp.src('./sass/main.scss')
    //2. Pass scss files through sass
    .pipe(sass())
    //3. Saves css file in the proper directory
    .pipe(gulp.dest('./css'))
    //4. Stream changes to the browser
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./sass/**/*.scss', style).on('change', browserSync.reload);
    gulp.watch('./index.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;