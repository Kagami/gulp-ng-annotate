"use strict";

var assert = require("assert");
var gutil = require("gulp-util");
var ngAnnotate = require("./index");

var ORIGINAL = 'angular.module("test"); m.directive("foo", function($a, $b) {});';
var TRANSFORMED = 'angular.module("test"); m.directive("foo", ["$a", "$b", function($a, $b) {}]);';
var BAD_INPUT = 'angular.module("test").directive("foo", function$a, $b) {});';

describe("gulp-ng-annotate", function() {

  it("should annotate angular declarations", function (done) {
    var stream = ngAnnotate();

    stream.on("data", function (data) {
      assert.equal(data.contents.toString(), TRANSFORMED);
      done();
    });

    stream.write(new gutil.File({contents: new Buffer(ORIGINAL)}));
  });

  it("should not touch already annotated declarations", function (done) {
    var stream = ngAnnotate();

    stream.on("data", function (data) {
      assert.equal(data.contents.toString(), TRANSFORMED);
      done();
    });

    stream.write(new gutil.File({contents: new Buffer(TRANSFORMED)}));
  });

  it("should emit PluginError on bad input", function (done) {
    var stream = ngAnnotate();

    try {
        stream.write(new gutil.File({contents: new Buffer(BAD_INPUT)}));
    } catch (err) {
        assert(err instanceof gutil.PluginError);
        done();
    }
  });

  it("should support passing ng-annotate options", function (done) {
    var stream = ngAnnotate({remove: true});

    stream.on("data", function (data) {
      assert.equal(data.contents.toString(), ORIGINAL);
      done();
    });

    stream.write(new gutil.File({contents: new Buffer(TRANSFORMED)}));
  });

});
