var generate = require('./generate');

var demo = function () {
  var password = generate();
  console.log('Password:', password);
};

module.exports = demo();
