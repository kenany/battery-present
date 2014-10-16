var present = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(present));
});

test('battery is present', function(t) {
  t.plan(1);
  present('BAT0', function(exists) {
    t.ok(exists);
  });
});

test('battery is not present', function(t) {
  t.plan(1);
  present('BAT9', function(exists) {
    t.notOk(exists);
  });
});

test('defaults to BAT0', function(t) {
  t.plan(1);
  present(function(exists) {
    t.ok(exists);
  });
});