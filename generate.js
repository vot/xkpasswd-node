var _ = require('lodash');
var randomWord = require('random-words');

/**
 * Patterns can consist of any combination of the following:
 * w: words
 * d: digits
 * s: separators
 */

/**
 * Parse options to generate a pattern
 */
var processOpts = function (opts) {
  // define defaults
  if (!opts.complexity) opts.complexity = 3;
  var defaultSeparators = '#.-=+';
  var rtn = {};

  // check for complexity level
  // TODO: Add some sensible patterns
  if (opts.complexity === 1) rtn.pattern = 'wsw';
  if (opts.complexity === 2) rtn.pattern = 'wswsdd';
  if (opts.complexity === 3) rtn.pattern = 'wswswsdd';
  if (opts.complexity === 4) rtn.pattern = 'swswswswswsdd';

  if (opts.complexity === 5) {
    rtn.pattern = 'swswswswswsdd'
    defaultSeparators = '#!@$*+:|~?';
  };

  if (opts.complexity === 6) {
    rtn.pattern = 'ddswswswswswsdd';
    rtn.transform = 'alternate';
    defaultSeparators = '!@$%^&*-_+=:|~?.;';
  }

  // Pick a random separator from supplied list
  separators = (opts.separators || defaultSeparators);
  rtn.separator = separators.split('')[_.random(0, separators.length - 1)];
  return rtn;
}


/**
 * Put the password together
 */

var generate = function (opts) {
  opts = processOpts(opts);
  var pattern = opts.pattern;
  var separator = opts.separator;
  var uppercase = (opts.transform && opts.transform == 'uppercase');
  var password = [];

  _.forEach(pattern, function (type) {
    var value;
    if (type === 'd') value = _.random(0, 9);
    if (type === 's') value = separator;
    if (type === 'w') {
      value = randomWord();
      if (opts.transform && opts.transform == 'alternate') uppercase = !uppercase;
      if (uppercase) {
        value.toUpperCase();
      } else {
        value.toLowerCase();
      }
    }

    password.push(value);
  });

  return password.join('');
};

module.exports = generate;
