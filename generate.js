var wordList = require('word-list-json');

// define helpers
var h = {
  random: function (min, max) {
    // Returns a random integer between min (included) and max (included)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  getRandomWord: function () {
    return wordList[h.random(0, wordList.length - 1)];
  },

  resolveComplexity: function (complexity) {
    // Patterns can consist of any combination of the following: (w)ords, (d)igits, (s)eparators
    var rtn = {};
    rtn.separators = '#.-=+';
    if (complexity < 1) complexity = 1;
    if (complexity > 6) complexity = 6;

    if (complexity === 1) rtn.pattern = 'wsw';
    if (complexity === 2) rtn.pattern = 'wswsdd';
    if (complexity === 3) rtn.pattern = 'wswswsdd';
    if (complexity === 4) rtn.pattern = 'swswswswswsdd';

    if (complexity === 5) {
      rtn.pattern = 'swswswswswsdd'
      rtn.separators = '#!@$*+:|~?';
    };

    if (complexity === 6) {
      rtn.pattern = 'ddswswswswswsdd';
      rtn.transform = 'alternate';
      rtn.separators = '!@$%^&*-_+=:|~?.;';
    }

    return rtn;
  },

  processOpts: function (opts) {
    if (!opts.complexity) opts.complexity = 3;
    var predefined = h.resolveComplexity(opts.complexity);
    var separators = (opts.separators || predefined.separators);
    var rtn = {};

    rtn.pattern = (opts.pattern || predefined.pattern);
    rtn.separator = separators.split('')[h.random(0, separators.length - 1)];
    if (predefined.transform) rtn.transform = predefined.transform;

    return rtn;
  }
}


module.exports = function (opts) {
  o = h.processOpts(opts);
  var pattern = o.pattern.split('');
  var uppercase = (o.transform && o.transform == 'uppercase');
  var password = [];

  pattern.forEach(function (type) {
    var value;
    if (type === 'd') value = h.random(0, 9);
    if (type === 's') value = o.separator;
    if (type === 'w') {
      value = h.getRandomWord();
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
