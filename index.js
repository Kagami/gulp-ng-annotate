"use strict";

var gutil = require("gulp-util");
var through = require("through2");
var ngAnnotate = require("ng-annotate");

module.exports = function (options) {
  var opts = options || {add: true};

  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.isStream()) {
      this.emit("error", new gutil.PluginError("gulp-ng-annotate", "Streaming not supported"));
      return cb();
    }

    var res = ngAnnotate(file.contents.toString(), opts);
    if (res.errors) {
      this.emit("error", new gutil.PluginError("gulp-ng-annotate", res.errors.join("\n")));
      return cb();
    }
    file.contents = new Buffer(res.src);

    this.push(file);
    cb();
  });
};
