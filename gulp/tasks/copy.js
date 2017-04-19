'use strict';

var gulp = require( 'gulp' );
var plugins = require( 'gulp-load-plugins' )();
var configCopy = require( '../config' ).copy;
var handleErrors = require( '../utils/handle-errors' );
var browserSync = require( 'browser-sync' );

gulp.task( 'copy:files', function() {
  var files = configCopy.files;
  return gulp.src( files.src )
    .pipe( plugins.changed( files.dest ) )
    .on( 'error', handleErrors )
    .pipe( gulp.dest( files.dest ) )
    .pipe( browserSync.reload( {
      stream: true
    } ) );
} );

gulp.task( 'copy',
  [
    'copy:files'
  ]
);
