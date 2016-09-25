#! /usr/local/bin/node
var generate = require('./generate');
var cliParser = require('clarg');


// Execute the application
var cliArgs = cliParser();

var options = {
  complexity: cliArgs.opts.complexity || cliArgs.opts.c,
  separators: cliArgs.opts.separators || cliArgs.opts.s,
  pattern: cliArgs.opts.pattern || cliArgs.opts.p,
  number: cliArgs.opts.number || cliArgs.opts.n || 1
};

options.number = parseInt(options.number);

if (typeof options.number !== 'number' || options.number < 1) {
  options.number = 1;
}

if (options.number === 1) {
  console.log('Password:', generate(options));
} else {
  console.log('Passwords:\n---------------------------------');
  for (i = 0; i < options.number; i++) {
    console.log(generate(options));
  }
}
