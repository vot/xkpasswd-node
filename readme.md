Memorable password generator, inspired by a PERL module powering xkpasswd.net/s/


## How to use

Use as any node module.

```
var xkpasswd = require('xkpasswd');
console.log('Default options:', xkpasswd());
console.log('Custom pattern:', xkpasswd({pattern: 'DDSwSwSwSDD'}));
```

You can also use xkpasswd command in your terminal if you install it globally.

```
npm install xkpasswd -g
xkpasswd
```


## Changelog

* Added bin and a separate CLI entry point
* Moved generate.js to its own file
