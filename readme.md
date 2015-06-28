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


## Issues and requests

Please log your issues at https://github.com/vot/xkpasswd.js/issues

You can also just go ahead and add a feature yourself, simply create a pull request.
