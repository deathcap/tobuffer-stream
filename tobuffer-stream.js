'use strict';

var through = require('through');
var typedArrayToBuffer = require('typedarray-to-buffer');
var isTypedArray = require('is-typedarray');

module.exports = through(function write(data) {
  if (isTypedArray(data) && !Buffer.isBuffer(data)) data = typedArrayToBuffer(data);
  else if (data instanceof ArrayBuffer) data = new Buffer(new Uint8Array(data));
  this.queue(data);
});

