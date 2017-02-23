var gulp            = require('gulp'),
    browserSync     = require('browser-sync').create();

// Static server setup
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });
});

// Process JS fles and reload browserSync
gulp.task('watch', ['browser-sync'], function() {
  gulp.watch("app/styles.css", browserSync.reload);
  gulp.watch("app/functions.js", browserSync.reload);
  gulp.watch("app/index.html", browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);
