#!/usr/bin/env node
var generate = require('./generate');
var cliParser = require('clarg');


// Execute the application
var cliArgs = cliParser();

var options = {
  complexity: cliArgs.opts.complexity || cliArgs.opts.c,
  separators: cliArgs.opts.separators || cliArgs.opts.s,
  pattern: cliArgs.opts.pattern || cliArgs.opts.p,
  transform: cliArgs.opts.transform || cliArgs.opts.t,
  number: cliArgs.opts.number || cliArgs.opts.n || 1
};

options.number = parseInt(options.number);
if (typeof options.number !== 'number' || options.number < 1) {
  options.number = 1;
}

for (var i = 0; i < options.number; i++) {
  console.log(generate(options));
}
