var _ = require('lodash');
var randomWord = require('random-words');

var defaults = {
  // words: {
  //   language: 'en',
  //   minimum: 3,
  //   maximum: 8,
  //   transformations: 'alternating'
  // },
  // padding: {
  //   digits: [2, 2],
  //   symbols: [2, 2]
  // },
  symbols: '!@$%^&*-_+=:|~?.;',
  pattern: 'wSwSwSDD'
};

/**
 * Patterns can consist of any combination of the following:
 * w: words
 * D: digits
 * S: separators
 */


var generate = function (opts) {
  var o = _.merge({}, opts, defaults);
  var pattern = o.pattern.split('');
  var separator = o.symbols.split('')[_.random(0, o.symbols.length - 1)];
  var password = [];

  _.forEach(pattern, function (type) {
    var value;

    if (type === 'D') {
      value = _.random(0, 9);
    }

    if (type === 'S') {
      value = separator;
    }

    if (type === 'w') {
      value = randomWord();
    }

    password.push(value);
  });

  password = password.join('');
  // add padding here

  return password;
};

module.exports = generate;
