var gulp = require("gulp"),
    concat = require("gulp-concat"),
    less = require("gulp-less"),
    cssmini = require("gulp-minify-css"),
    uglify = require("gulp-uglify");

gulp.task("css", function() {
    gulp.src("www/less/**/*.less")
        .pipe(less())
        .pipe(gulp.dest("www/css/"));
});

gulp.task("csspub", function() {
    gulp.src("www/css/**/*.css")
        .pipe(concat("app.css"))
        .pipe(cssmini())
        .pipe(gulp.dest("build-www/css/"));
});

// gulp.task("default", ["css", "js"]);

gulp.task('watch', function(){  // 当less和js文件变动时候编译
    gulp.watch(["www/less/**/*.less"], ["css"]);
})