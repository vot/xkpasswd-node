var wordList = require('word-list-json');

/**
 * Patterns can consist of any combination of the following:
 * w: words
 * d: digits
 * s: separators
 */


var helpers = {
  random: function (min, max) {
    // Returns a random integer between min (included) and max (included)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  getRandomWord: function () {
    return wordList[helpers.random(0, wordList.length - 1)];
  },

  processOpts: function (opts) {
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

    // Check if custom pattern is provided
    if (opts.pattern) rtn.pattern = opts.pattern;

    // Pick a random separator from supplied list
    separators = (opts.separators || defaultSeparators);
    rtn.separator = separators.split('')[helpers.random(0, separators.length - 1)];
    return rtn;
  }
}


module.exports = function (opts) {
  o = helpers.processOpts(opts);
  var pattern = o.pattern.split('');
  var uppercase = (o.transform && o.transform == 'uppercase');
  var password = [];

  pattern.forEach(function (type) {
    var value;
    if (type === 'd') value = helpers.random(0, 9);
    if (type === 's') value = o.separator;
    if (type === 'w') {
      value = helpers.getRandomWord();
      if (o.transform && o.transform == 'alternate') uppercase = !uppercase;
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
