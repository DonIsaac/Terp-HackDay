const gulp = require('gulp')
const { src, dest } = gulp
const uglify = require('gulp-uglify-es').default
const del = require('del')

gulp.task('clean', () => {
  return del(['dist'])
})

gulp.task('build', ['clean'], () => {
  return src('lib/**/*.js')
    .pipe(uglify())
    .pipe(dest('dist/'))
})
