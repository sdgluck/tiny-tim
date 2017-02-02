module.exports = (unit = 's', suffix) => {
  const divs = { ms: 1, s: 1e3, m: 6e4, h: 36e5 }
  const div = divs[unit] || divs.ms
  const append = suffix && div ? unit : 0
  const start = Date.now()

  return () => {
    const time = (Date.now() - start) / div
    return (suffix !== 'ms' ? +time.toFixed(2) : time) + append
  }
}
