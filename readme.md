# xkpasswd

[![NPM Version][npm-img]][npm-url]
[![NPM Downloads][npm-dl-img]][npm-url]

[npm-url]: https://npmjs.org/package/xkpasswd
[npm-img]: https://img.shields.io/npm/v/xkpasswd.svg
[npm-dl-img]: https://img.shields.io/npm/dm/xkpasswd.svg



*Memorable password generator, inspired by a PERL module powering xkpasswd.net/s/*

Also available in Go: [xkpasswd-go](https://github.com/vot/xkpasswd-go)


## Using as a node module

You can use xkpasswd as a module in your application.

**EXAMPLE**

```
var xkpasswd = require('xkpasswd');

console.log(xkpasswd());
valuable=bear=difference=53

console.log(xkpasswd({complexity: 5, separators: '#+-'}));
addition#wheat#congress#manner#lonely#20

```


## Using as a command in terminal

You can also use xkpasswd command in your terminal if you install the package
globally (`npm install xkpasswd -g`).

**CLI OPTIONS**

```
xkpasswd --complexity <number> --separators <string> --pattern <string> --number <number>
```

*xkp* alias for this task is also defined for convenience.
You can use it interchangeably with `xkpasswd` command.



You can specify `complexity` argument in accordance with [complexity levels table](#complexity-levels). Defaults to 2.

If specified `pattern` argument overrides the [pattern](#patterns) derived from complexity level.

If `separators` are provided they are used instead of the standard set (see complexity levels).
One separator is used per password, picked randomly from the provided set.

Finally, to generate multiple passwords at once you can specify the desired
amount with the `number` argument. Defaults to 1.


**EXAMPLE** Default behaviour

```
$ xkpasswd
hide+threw+money+61
```

**EXAMPLE** Specify complexity

```
$ xkpasswd -c 5
join=industrial=wide=direction=lungs=16

$ xkpasswd -c 6
57!FIFTHLY!astronauts!AFFECTEDLY!nymphs!TRUSTLESSNESSES!06
```

**EXAMPLE** Specify custom pattern

```
$ xkpasswd -p wdwd

adjective3solar6
```


**EXAMPLE** Specify complexity, custom separators and number of passwords

```
$ xkpasswd -c 3 -s '#!+' -n 5

dog!friend!successful!47
other#sell#close#01
hyperspatial+polyvalences+inquirendo+03
war#reassemble#inventress#93
gainsays+illumes+discontiguity+86
```


## Patterns

Patterns can consist of any combination of words, digits and separators.
The first letters (**w**, **d** and **s** respectively) are used in pattern string provided to the password generation function.

For example:

* `w` will return a single word (i.e. `demographics`)
* `wsd` will return a word and a digit, separated by one of the permitted separators (i.e. `storm#7`)
* `wswsdd` will return two words followed by a two digit number, all with separators between (i.e. `delates+dissembled+16`)



## Complexity levels

There are 6 complexity levels specified which can be used to provide
default patterns as well as trigger additional features, such as alternate casing
between words and expanded sets of separators.


| Complexity | Pattern         | Separators       |
|------------|-----------------|------------------|
| 1          | wsw             | #.-=+_           |
| 2          | wswsw           | #.-=+_           |
| 3          | wswswsdd        | #.-=+_           |
| 4          | wswswswsdd      | #.-=+_           |
| 5          | wswswswswsd     | #.-=+_!$*:~?     |
| 6          | ddswswswswswsdd | #.-=+_!$*:~?%^&; |

In addition level 6 alternates upper and lower case between words.

## Release notes

v1.0.0

- updated complexity levels
- fixed uppercase/lowercase transformation
- cleaned up code and documentation


v0.0.9

- corrected shebang, works cross-platform now


v0.0.8

- using a simpler CLI parser
- updated options syntax


v0.0.7

- replaced random-words module with a more custom solution using word-list-json module
- cleaned up a bit and made code slightly more modular and extensible
