'use strict';

var gulp = require( 'gulp' );
var util = require( 'gulp-util' );
var browserSync = require( 'browser-sync' );
var config = require( '../config.js' );
gulp.task( 'serve', function() {
  var port = util.env.port || '3000';
  browserSync.init( {
    files: [ config.site + '/**' ],
    port: port,
    server: {
      baseDir: config.site
    }
  } );
} );
