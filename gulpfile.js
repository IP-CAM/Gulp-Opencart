// Copyright © Roman Sha, 2017 year;
// e-mail:	roma78sha@gmail.com
// download: opencartforum.com/profile/678008-sha/

var gulp         = require('gulp'),
	rename       = require('gulp-rename');

// распределение файлов на "своё" место в OpenCart

// to its place 
gulp.task('php_distribution', [], function() {
	var file = gulp.src( 'WORK/*.php' );
	return file.pipe( rename( function (path) {
		var path_split = path.basename.replace(/-/g,"/");
		path.basename = path_split;
		path.extname = '.php';

		console.log(path.basename, path.extname);
	}))
	.pipe(gulp.dest('./'));
});

// to its place
gulp.task('tpl_distribution', [], function() {
	var file = gulp.src( 'WORK/*.tpl' );
	return file.pipe( rename( function (path) {
		var path_split = path.basename.replace(/-/g,"/");
		path.basename = path_split;
		path.extname = '.tpl';

		console.log(path.basename, path.extname);
	}))
	.pipe(gulp.dest('./'));
});

// структурировано сложить файлы для возможности последующей упаковки или переноса в проэкт

// structured in one folder for packaging *.php
gulp.task('arcphp', [], function() {
	var file = gulp.src( 'WORK/*.php' );
	return file.pipe( rename( function (path) {
		var path_split = path.basename.replace(/-/g,"/");

		path.basename = path_split;
		path.extname = '.php';

		console.log(path.basename, path.extname);
	}))
	.pipe(gulp.dest('./WORK/zip/'));
});

// structured in one folder for packaging *.tpl
gulp.task('arctpl', [], function() {
	var file = gulp.src( 'WORK/*.tpl' );
	return file.pipe( rename( function (path) {
		var path_split = path.basename.replace(/-/g,"/");

		path.basename = path_split;
		path.extname = '.tpl';

		console.log(path.basename, path.extname);
	}))
	.pipe(gulp.dest('./WORK/zip/'));
});

// watching
gulp.task('watch', [], function() {
	gulp.watch('WORK/*.php', ['php_distribution']);
	gulp.watch('WORK/*.tpl', ['tpl_distribution']);
});

gulp.task('arc', ['arcphp', 'arctpl']);
gulp.task('default', ['watch']);
