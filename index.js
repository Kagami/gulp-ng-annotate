"use strict";

var gutil = require("gulp-util");
var through = require("through2");
var ngAnnotate = require("ng-annotate");

module.exports = function () {
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.isStream()) {
      this.emit("error", new gutil.PluginError("gulp-ng-annotate", "Streaming not supported"));
      return cb();
    }

    try {
      var annotated = ngAnnotate(file.contents.toString(), {add: true}).src;
      file.contents = new Buffer(annotated);
    } catch (err) {
      this.emit("error", new gutil.PluginError("gulp-ng-annotate", err));
    }

    this.push(file);
    cb();
  });
};
