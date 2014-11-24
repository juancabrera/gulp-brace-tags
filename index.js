/*jshint node:true */

'use strict';

var map     = require('map-stream'),
    gutil   = require('gulp-util'),
    exec    = require('child_process').exec,
    fs      = require('fs')
  ;

module.exports = function(bracetagscmd, opt) {

  // Assign default options if one is not supplied
  opt = opt || {};
  opt = {
    out    : opt.out     || false,
    debug  : opt.debug   || false
  };

  // check for tags command
  if (!bracetagscmd) {
    fs.exists('/usr/local/bin/tags', function(exists) {
      if (!exists) {
        gutil.log(gutil.colors.red('[ERROR]', "BraceTags command not provided and default of /usr/local/bin/tags does not exist on system"));
      }
    });

    bracetagscmd = '/usr/local/bin/tags';

    gutil.log(gutil.colors.blue('[NOTICE]', "BraceTags command not provided, defaulting to /usr/local/bin/tags"));
  }

  return map( function(file, cb) {

    var cmd = bracetagscmd + ' build ';

    // Check for output option
    if (!opt.out) {
      gutil.log(gutil.colors.red('[ERROR]', '"out" not provided!'));
      // TODO : throw error here
    }

    // Output folder
    cmd += ' --output ' + opt.out

    // Source of the files
    cmd += ' --root ' + file.path

    // print out debug details
    if (opt.debug) gutil.log(gutil.colors.yellow('[DEBUG]', 'Command - ' + cmd));

    // Run Brace Tags
    exec(cmd, function(error, stdout, stderr) {
      if (stderr) gutil.log(stderr);

      // call user callback if any error occurs
      if (error) {
        if (opt.debug) {
          gutil.log(gutil.colors.red('[ERROR]', error));
        }
        cb(error, file);
      } else {
        gutil.log(stdout);
        cb(null, file);
      }
    });
  });
}
