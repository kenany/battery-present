var path = require('path');
var split = require('binary-split');
var fs = require('graceful-fs');
var isFunction = require('lodash.isfunction');
var firstLine = require('first-line');
var batteryPath = require('battery-path');

function present(battery, callback) {
  if (isFunction(battery)) {
    callback = battery;
    battery = 'BAT0';
  }

  var bstr = path.resolve(batteryPath(battery), 'present');

  firstLine(bstr, function(error, line) {
    if (error) {
      callback(false);
      return;
    }
    callback(line.toString() === '1');
  });
}

module.exports = present;