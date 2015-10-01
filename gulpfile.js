var gulp = require('gulp'),
	browserSync = require('browser-sync').create();


gulp.task('browser-sync', function() {
	gulp.watch(['build/app.js', 'index.html']).on('change', browserSync.reload);
    browserSync.init({
        server: {
        	files: ['index.html'],
           baseDir: "./",
           directory: true
        }
    });
});