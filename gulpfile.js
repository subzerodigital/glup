var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

gulp.task('hello',function(){
	console.log('Our first hello world task');
});

gulp.task('vet',function(){
	gulp.src([
		'./src/**/*.js',
		'./*.js'
	])
	.pipe(jshint())
	.pipe(jscs())
	.pipe(jshint.reporter('jshint-stylish',{verbose:true}));
});