var gulp = require('gulp');
var pkg = require('./package.json');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var del = require('del');
var spawn = require('child_process').spawn;

var compilelist =
[
    {
        "name": "main_js",
        "type": "js",
        "src": "./src/js/main/*.js",
        "outfile":"main.js",
        "dest":"./build/js/"
    },
    {
        "name": "main_css",
        "type": "css",
        "src": "./src/css/main/*.css",
        "outfile":"main.css",
        "dest":"./build/css/"
    }
];

var copylist =
[
];

gulp.task('compile', function(){
    for(var i = 0; i < compilelist.length; i++)
    {
        var t = compilelist[i];
        process.stdout.write(t.name);
        process.stdout.write("\n");
        if(t.type=="js")
        {
            gulp.src(t.src)
                .pipe(concat(t.outfile))
                .pipe(gulp.dest(t.dest))
                .pipe(uglify())
                .pipe(rename({ extname: '.min.js'}))
                .pipe(gulp.dest(t.dest));
        }
        else if(t.type=="css")
        {
            gulp.src(t.src)
                .pipe(concat(t.outfile))
                .pipe(gulp.dest(t.dest));
        }
    }
});

gulp.task('copy', function(){
    for(var i = 0; i < copylist.length; i++)
    {
        var t = copylist[i];
        gulp.src(t.src).pipe(gulp.dest(t.dest));
    }
});


gulp.task('clean', function () {
  return del([
    './build/js/**/*',
    './build/css/**/*'
  ]);
});

gulp.task('test', function(){
  // gulp.src(scriptFiles).pipe(jshint());
});

gulp.task('default', ['clean','copy','compile']);
