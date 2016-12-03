var gulp = require("gulp");
var ts = require("gulp-typescript");
var sourcemaps = require('gulp-sourcemaps');
var tsProject = ts.createProject("tsconfig.json");
var path = require('path');

gulp.task("default", function () {
    var tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())

    return tsResult.js
        .pipe(sourcemaps.write('.', {
           sourceRoot: function(file){ 
               return file.cwd + '/src'; }
            }
        ))
        .pipe(gulp.dest('dest'));
});

gulp.task('watch', ['default'], function() {
    gulp.watch('src/**/*.ts', ['default']);
});
