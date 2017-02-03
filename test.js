'use strict'

const test = require('tape')

const timer = require('./lib')

test('exports fn', (t) => {
  t.equals(typeof timer, 'function')
  t.end()
})

test('timer returns fn', (t) => {
  t.equals(typeof timer(), 'function')
  t.end()
})

test('no suffix returns number', (t) => {
  t.equals(isNaN(Number(timer()())), false)
  t.end()
})

;['ms', 's', 'm', 'h'].forEach((unit) => {
  test(`${unit} returns "${unit}" suffix`, (t) => {
    const res = timer(unit, true)()
    t.equals(res.indexOf(unit) !== -1, true)
    t.end()
  })
})

test('counts ok', (t) => {
  const start = Date.now()

  const ms = timer('ms')
  const s = timer('s')
  const m = timer('m')
  const h = timer('s')

  const end = start + (1000 * 60 * 60)
  const expected = end - start

  Date.now = () => end

  t.equals(ms() >= expected, true)
  t.equals(s() >= expected / 1000, true)
  t.equals(m() >= expected / (1000 * 60), true)
  t.equals(h() >= expected / (1000 * 60 * 60), true)
  t.end()
})
