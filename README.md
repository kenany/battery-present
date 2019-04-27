# battery-present

[![Greenkeeper badge](https://badges.greenkeeper.io/KenanY/battery-present.svg)](https://greenkeeper.io/)

[![Dependency Status][gemnasium-svg]][gemnasium]

Check if a specific battery is present. Probably only works on Linux.

## Example

``` javascript
var batteryPresent = require('battery-present');

batteryPresent('BAT0', function(exists) {
  console.log(exists);
  // true
});
```

## Installation

``` bash
$ npm install battery-present
```

## API

``` javascript
var batteryPresent = require('battery-present');
```

### `batteryPresent([battery='BAT0'], callback)`

Given an optional _String_ `battery` (defaults to `'BAT0'`), calls
`callback(true)` if that `battery` exists in the current system. Otherwise calls
`callback(false)`.


   [gemnasium]: https://gemnasium.com/KenanY/battery-present
   [gemnasium-svg]: https://img.shields.io/gemnasium/KenanY/battery-present.svg