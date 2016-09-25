# xkpasswd

*Memorable password generator, inspired by a PERL module powering xkpasswd.net/s/*


## How to use

You can use xkpasswd as a module in your application.

**EXAMPLE**

```
var xkpasswd = require('xkpasswd');

console.log(xkpasswd());
valuable=bear=difference=53

console.log(xkpasswd({complexity: 5, separators: '#+-'}));
#addition#wheat#congress#manner#lonely#20

```


<br>

You can also use xkpasswd command in your terminal if you install it globally.

**CLI OPTIONS**

```
xkpasswd --complexity <number> --separators <string> --pattern <string> --number <number>
```

*xkp* alias for this task is also defined and is used in examples below.

<br>

**EXAMPLE** Default behaviour

```
$ xkp

hide+threw+money+61
```

**EXAMPLE** Specify complexity

```
$ xkp -c 4

=join=industrial=wide=direction=lungs=16
```

**EXAMPLE** Specify custom pattern

```
$ xkp -p wdwd

adjective3solar6
```


**EXAMPLE** Specify complexity, custom separators and number of passwords

```
$ xkp -c 3 -s '#!+' -n 5

Passwords:
---------------------------------
dog!friend!successful!47
other#sell#close#01
hyperspatial+polyvalences+inquirendo+03
war#reassemble#inventress#93
gainsays+illumes+discontiguity+86
---------------------------------
```

<br>


## Release notes

v0.0.8
- using a simpler CLI parser
- updated options syntax


v0.0.7
- replaced random-words module with a more custom solution using word-list-json module
- cleaned up a bit and made code slightly more modular and extensible


## Issues and requests

Please log your issues at https://github.com/vot/xkpasswd.js/issues

You can also just go ahead and add a feature yourself, simply create a pull request.

<br>
