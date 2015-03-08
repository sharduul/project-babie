var gulp = require("gulp"),
	jshint = require("gulp-jshint");


var paths = {
	src: ['src/**']
};

gulp.task('jshint', function(){
	gulp.src(paths.src)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('default', ['jshint'], function(){
	gulp.watch('paths.src', function(){
		gulp.run('jshint');
	});
});