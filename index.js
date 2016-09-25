#!/usr/bin/env node
if (require.main === module) {
  return require('./cli');
}

module.exports = require('./generate');
