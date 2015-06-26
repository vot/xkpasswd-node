var _ = require('lodash');
var randomWord = require('random-words');

var opts = {
  words: {
    language: 'en',
    minimum: 3,
    maximum: 8,
    transformations: 'alternating'
  },
  symbols: '!@$%^&*-_+=:|~?.;',
  // padding: {
  //   digits: [2, 2],
  //   symbols: [2, 2]
  // },
  pattern: 'wSwSwSDD'
};

/**
 * Patterns can consist of any combination of the following:
 * w: words
 * D: digits
 * S: separators
 */

var generate = function (opts) {
  var pattern = opts.pattern.split('');
  var separator = opts.symbols.split('')[_.random(0, opts.symbols.length - 1)];
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


var demo = function () {
  var password = generate(opts);
  //console.log('-- XKPasswd');
  console.log('Password:', password);
};





module.exports = demo();
