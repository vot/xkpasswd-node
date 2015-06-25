var _ = require('lodash');
var randomWord = require('random-words');

var opts = {
  words: {
    language: 'en',
    minimum: 3,
    maximum: 8,
    transformations: 'alternating'
  },
  symbols: '!@$%^&*-_+=:|~?/.;',
  // padding: {
  //   digits: [2, 2],
  //   symbols: [2, 2]
  // },
  pattern: '(word)(S)(word)(S)(D)(D)'
};

var generate = function (opts) {
  var pattern = opts.pattern.match(/\((.*?)\)/g);
  var separator = opts.symbols.split('')[_.random(0, opts.symbols.length - 1)];
  var password = [];

  var reqs = _.countBy(pattern, function (type) {
    return _.trim(type, '()');
  });

  _.forEach(pattern, function (type) {
    var value;
    type = _.trim(type, '()');

    if (type === 'D') {
      value = _.random(0, 9);
    }

    if (type === 'S') {
      value = separator;
    }

    if (type === 'word') {
      value = randomWord();
    }

    password.push(value);
  });

  password = password.join('');
  // add padding here
  console.log('Generating password. Complexity:', reqs);
  console.log('Separator:', separator, '\n');
  console.log('Password:', password, '\n');

  return password;
}







console.log('-- XKPasswd');
module.exports = generate(opts);
