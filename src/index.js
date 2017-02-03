module.exports = (unit = 's', suffix) => {
  var divs = { ms: 1, s: 1e3, m: 6e4, h: 36e5 }
  var div = divs[unit] || divs.ms
  var append = suffix && div ? unit : 0
  var start = Date.now()

  return () => {
    var time = (Date.now() - start) / div
    return (suffix !== 'ms' ? +time.toFixed(2) : time) + append
  }
}
