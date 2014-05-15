# [gulp](http://gulpjs.com)-ng-annotate

> Add angularjs dependency injection annotations with [ng-annotate](https://github.com/olov/ng-annotate)

## Install

```bash
$ npm install --save-dev gulp-ng-annotate
```

## Usage

```js
var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('default', function () {
	return gulp.src('src/app.js')
		.pipe(ngAnnotate())
		.pipe(gulp.dest('dist'));
});
```

## License

gulp-ng-annotate - Add angularjs dependency injection annotations with ng-annotate

Written in 2014 by Kagami Hiiragi <kagami@genshiken.org>

To the extent possible under law, the author(s) have dedicated all copyright and related and neighboring rights to this software to the public domain worldwide. This software is distributed without any warranty.

You should have received a copy of the CC0 Public Domain Dedication along with this software. If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.
