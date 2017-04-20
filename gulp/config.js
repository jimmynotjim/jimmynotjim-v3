'use strict';

var fs = require( 'fs' );
var glob = require( 'glob' );
var gutil = require('gulp-util');
var bourbon = require( 'bourbon' ).includePaths
var neat = require( 'bourbon-neat' ).includePaths
/**
 * Set up file paths
 */
var loc = {
  src:  './src',
  dist: './dist',
  lib:  './node_modules', // eslint-disable-line no-sync, no-inline-comments, max-len
  test: './test',
  site: './_site'
};

module.exports = {
  pkg: JSON.parse( fs.readFileSync( 'package.json' ) ), // eslint-disable-line no-sync, no-inline-comments, max-len
  banner:
      '/*!\n' +
      ' *  <%= pkg.name %> - v<%= pkg.version %>\n' +
      ' *  <%= pkg.homepage %>\n' +
      ' *  Licensed <%= pkg.license %> by jimmynotjim@me.com\n' +
      ' */',
  lint: {
    src: [
      loc.src + '/scripts/**/*.js',
      loc.test + '/unit_tests/**/*.js',
      loc.test + '/browser_tests/**/*.js'
    ],
    gulp: [
      'gulpfile.js',
      'gulp/**/*.js'
    ]
  },
  test: {
    src:   loc.src + '/scripts/**/*.js',
    tests: loc.test
  },
  clean: {
    dest: loc.dist
  },
  styles: {
    cwd:      loc.src + '/styles',
    src:      loc.src + '/styles/style.scss',
    dest:     loc.dist + '/styles',
    settings: {
      includePaths: [
        bourbon,
        neat
      ],
      outputStyle: 'compressed'
    }
  },
  scripts: {
    src: [
      loc.src + '/scripts/main.js'
    ],
    dest: loc.dist + '/scripts/',
    name: 'main.js'
  },
  images: {
    src:  loc.src + '/images/**',
    dest: loc.dist + '/images'
  },
  copy: {
    files: {
      src: [
        loc.src + '/**/*.html',
        loc.src + '/**/*.pdf',
        loc.src + '/_*/**/*',
        loc.src + '/robots.txt',
        loc.src + '/favicon.ico',
        '!' + loc.lib + '/**/*.html'
      ],
      dest: loc.dist
    }
  },
  site: loc.site
};
