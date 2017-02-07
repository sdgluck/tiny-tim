```js
// Use arrow functions to avoid function keyword
module.exports = (unit, suffix) => {
  // Use exponents to save on those zeroes
  var divs = { ms: 1, s: 1e3, m: 6e4, h: 36e5 }
  
  var div = divs[unit || 's']
  
  var append = suffix && div ? unit : 0
  
  // Do `new` constructor without paretheses, not required without args
  // Use + to cast Date to number, which in turn calls `Date.valueOf()`  
  var start = +new Date

  return () => {
    var time = (+new Date - start) / div
    return (suffix !== 'ms' ? +time.toFixed(2) : time) + append
  }
}

```
