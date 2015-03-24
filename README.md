# [gulp](http://gulpjs.com)-ng-annotate [![Build Status](https://travis-ci.org/Kagami/gulp-ng-annotate.svg?branch=master)](https://travis-ci.org/Kagami/gulp-ng-annotate)

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

## Options

You can pass any of the [ng-annotate options](https://github.com/olov/ng-annotate#library-api) as an object:
```js
{
	remove: true,
	add: true,
	single_quotes: true
}
```

`add: true` option is implied by default unless `remove` is set to true.

## FAQ

### I got an error `Error in plugin 'gulp-ng-annotate': error: couldn't process source due to parse error`

That's not a `gulp-ng-annotate` or `ng-annotate` error: you passed the invalid JavaScript code to the plugin. Check your source code near the specified place.

### I need the latest version of `ng-annotate`

Make sure you are using the latest version of `gulp-ng-annotate`. Also try to reinstall/update it to get the latest suitable version of `ng-annotate` from npm.

### I need a new annotating feature/annotations are incorrect

Report it to ng-annotate's [bugtracker](https://github.com/olov/ng-annotate/issues). `gulp-ng-annotate` is just a wrapper around `ng-annotate`.

## License

gulp-ng-annotate - Add angularjs dependency injection annotations with ng-annotate

Written in 2014-2015 by Kagami Hiiragi <kagami@genshiken.org> and gulp-ng-annotate contributors

To the extent possible under law, the author(s) have dedicated all copyright and related and neighboring rights to this software to the public domain worldwide. This software is distributed without any warranty.

You should have received a copy of the CC0 Public Domain Dedication along with this software. If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.
