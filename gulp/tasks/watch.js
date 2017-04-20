'use strict';

/* Notes:
   - watch.js watches the source files for changes, then calls the needed task.
   - gulp/tasks/serve.js reloads the browser with the compiled files.
*/

var gulp = require( 'gulp' );
var config = require( '../config' );

gulp.task( 'watch', [ 'serve' ], function() {
  gulp.watch( config.scripts.src, [ 'scripts' ] );
  console.log( config.styles.cwd );
  gulp.watch( config.styles.cwd + '/**/*.scss', [ 'styles' ] );
  gulp.watch( config.images.src, [ 'images' ] );
  gulp.watch( config.copy.files.src, [ 'copy:files' ] );
} );
