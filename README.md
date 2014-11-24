Gulp Brace Tags
===============

Usage
-----
Install Brace Tags
```
sudo easy_install brace-tags
```

Add the package to your package.json
```javascript
"devDependencies": {
  "gulp-brace-tags": "git+ssh://git@github.com:juancabrera/gulp-brace-tags.git"
}
```

Add it to your gulpfile.js
```javascript
// Please note that the source and output should be folders, not individual files.
var braceTags = require('gulp-brace-tags');

gulp.task('braceTags',function() {
  gulp.src("./source/styleguide/html/")
    .pipe(braceTags('/usr/local/bin/tags', {
      out     : './dist/styleguide/',
      debug   : false
    }))
});
```