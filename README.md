Gulp Brace Tags
===============
[Brace Tags](http://tags.brace.io/) Gulp plugin (wrapper for command line brace-tags).


# Note: Not being maintained as [Brace is gone](http://blog.brace.io/2015/01/26/goodbye/)


Install
-------
Make sure you have installed brace-tags
```
sudo easy_install brace-tags
```
Install the plugin
```
npm install gulp-brace-tags --save-dev
```

Usage
-----
```javascript
var braceTags = require('gulp-brace-tags');

gulp.task('braceTags',function() {
  gulp.src("./source/styleguide/html/")
    .pipe(braceTags('/usr/local/bin/tags', {
      out     : './dist/styleguide/',
      debug   : false
    }))
});
```