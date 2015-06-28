#! /usr/local/bin/node
var generate = require('./generate');
var parser = require('nomnom')();


// Define the Application function
var Application = function () {
  parser.options({
    'complexity': {
      position: 0,
      default: 3,
      help: 'Choose complexity level 1-6 (default: 3)'
    },
    'separators': {
      position: 1,
      help: 'Provide a set of custom separators (default: "!@$%^&*-_+=:|~?.;")'
    },
    'pattern': {
      abbr: 'p',
      help: 'Specify custom pattern (default: "wswswsdd"). Overrides complexity option.'
    },
    'number': {
      abbr: 'n',
      help: 'Generate multiple passwords'
    }
  });

  parser.nocommand()
    .callback(function (options) {
      if (!options.number || typeof options.number !== 'number' || options.number < 1) {
        options.number = 1;
      } else {
        options.number = parseInt(options.number);
      }

      if (options.number === 1) {
        console.log('Password:', generate(options));
      } else {
        console.log('Passwords:\n---------------------------------');
        for (i = 0; i < options.number; i++) {
          console.log(generate(options));
        }
        console.log('---------------------------------');
      }

    })

  return parser.parse();
};

// Execute the application
module.exports = Application();
