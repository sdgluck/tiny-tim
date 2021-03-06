<p align="center">
  <img src="https://github.com/sdgluck/tiny-tim/blob/master/tiny-tim.jpg" />
</p>

<p><h1 align="center">Tiny Tim</h1></p>

<p align="center">Meet Tim, a simple, small timer</p>

<p align="center">Made with ❤ at <a href="http://www.twitter.com/outlandish">@outlandish</a></p>
  
<p align="center">
    <a href="http://badge.fury.io/js/tiny-tim"><img alt="npm version" src="https://badge.fury.io/js/tiny-tim.svg" /></a>
</p>

<hr/>

:cookie:  Comes in at `156 bytes` minified. Zero dependencies.

:sparkles: Tiny Tim is compiled using [`babili`](https://github.com/babel/babili) for ES6+ and CommonJS environments.

:point_right: Use your preferred bundler and transpiler as required.

:page_facing_up: Read the [annotated source code](https://github.com/sdgluck/tiny-tim/blob/master/ANNOTATED.md).

## Install

```sh
npm install --save tiny-tim
```

```sh
yarn add tiny-tim
```
    
## Import

```js
// ES2015
import timer from 'tiny-tim'
```

```js
// CommonJS
var timer = require('tiny-tim') 
```

## Usage

### `timer([unit[, suffix]]) : Function`

Create a timer and start counting!

- __unit__ {String} Unit of time to return _(optional, default=`"s"`)_
- __suffix__ {Boolean} Attach suffix, e.g. unit "s" appends `"s"` _(optional, default=`false`)_

Available units: `"ms"`, `"s"`, `"m"`, `"h"`
 
Returns a function that stops the timer and returns the duration:
 - as a string if with suffix 
 - or as a number without
 
## Examples

```js
// Time in seconds with suffix
const seconds = timer('s', true)

setTimeout(() => {
  console.log(seconds()) //=> '10s'
}, 10000)

// reuse a timer...

setTimeout(() => {
  console.log(seconds()) //=> '15s'
}, 15000)
```

```js
// Time milliseconds without suffix
const milliseconds = timer()

setTimeout(() => {
  console.log(milliseconds()) //=> 1000
}, 1000)
```

## Contributing

All pull requests and issues welcome!

If you're not sure how, check out the [great video tutorials on egghead.io](http://bit.ly/2aVzthz)!
